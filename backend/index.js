const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');
var cors = require('cors') //  < --------------- IMPORTANTE (rode: npm install --save cors)

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors()) //  < --------------- IMPORTANTE

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);




//AQUI
    router.get('/autores/:livro', (req, res) =>{
        execSQLQuery('SELECT nameF, nameL FROM bookauthors inner join bookauthorsbooks on bookauthorsbooks.AuthorID = bookauthors.AuthorID where bookauthorsbooks.ISBN = '+parseInt(req.params.livro), res);
    });

    router.get('/autores_livros', (req, res) =>{
        execSQLQuery('SELECT * FROM bookauthorsbooks', res);
    });

    router.get('/categorias', (req, res) =>{
        execSQLQuery('SELECT distinct bookcategories.* FROM bookcategories inner join bookcategoriesbooks on bookcategories.CategoryID = bookcategoriesbooks.CategoryID', res);
    });

    router.get('/customer_email/:email', (req, res) =>{
        let x = execSQLQuery("SELECT * FROM bookcustomers where email = '"+req.params.email+"';", res);
        console.log(x);
    });

    router.get('/customer_id/:id', (req, res) =>{
        let x = execSQLQuery('SELECT * FROM bookcustomers where id = '+parseInt(req.params.id), res);
        console.log(x);
    });

    router.get('/description', (req, res) =>{
        execSQLQuery('SELECT * FROM bookdescriptions', res);
    });

    router.get('/description2/:isbn', (req, res) =>{
        execSQLQuery('SELECT * FROM bookdescriptions where isbn = '+parseInt(req.params.isbn), res);
    });

    router.get('/orderitems', (req, res) =>{
        execSQLQuery('SELECT * FROM bookordersitems', res);
    });

    router.get('/categoria/:cat', (req, res) =>{
        execSQLQuery('SELECT bookcategories.CategoryName, bookcategoriesbooks.*, bookdescriptions.* FROM bookcategories inner join bookcategoriesbooks on '
        +' bookcategories.CategoryID = bookcategoriesbooks.CategoryID '
        +' inner join bookdescriptions on bookcategoriesbooks.ISBN = bookdescriptions.ISBN '
        +' where bookcategoriesbooks.CategoryID = '+parseInt(req.params.cat), res);
    });

    router.get('/categoria_livro/:livro', (req, res) =>{
        execSQLQuery('SELECT bookcategories.CategoryName FROM bookcategories inner join bookcategoriesbooks on '
        +' bookcategories.CategoryID = bookcategoriesbooks.CategoryID where bookcategoriesbooks.ISBN = '+parseInt(req.params.livro), res);
    });
    

    router.get('/busca_livro/:titulo', (req, res) =>{

        execSQLQuery("SELECT * FROM bookdescriptions where title like '%"+(req.params.titulo)+"%';", res);
    });

    router.get('/busca_carrinho/:isbn', (req, res) =>{

        execSQLQuery("SELECT * FROM cart where isbn = "+(req.params.isbn)+";", res);
    });

    router.get('/tudo_carrinho', (req, res) =>{

        execSQLQuery("SELECT cart.*, bookdescriptions.title, bookdescriptions.price FROM cart inner join bookdescriptions on cart.isbn = bookdescriptions.ISBN;", res);
    });

    router.post('/add/cart/', (req, res) => {
        const quantidade = req.body.quantidade;
        const livro = req.body.livro;
        execSQLQuery(`INSERT INTO cart( isbn,quantidade) VALUES('${livro}','${quantidade}')`, res);
        alert(res);
    });//localhost:3000/add/cart/l@email.com/1/0201433362
    
    

    //router.post('/cadastra_usuario/:email/:name/:sobrenome/:street/:city/:state/:zip', (req, res) => {
    router.post('/cadastra_usuario/', (req, res) => {
  
        const email = req.body.email;
        const name = req.body.name;
        const sobrenome = req.body.sobrenome;
        const street = req.body.street;
        const city = req.body.city;
        const state = req.body.state;
        const zip = req.body.zip;
        execSQLQuery(`INSERT INTO bookcustomers(email, name, sobrenome, street, city, state, zip) VALUES('${email}','${name}','${sobrenome}','${street}','${city}','${state}','${zip}')`, res);
        //localhost:3000/cadastra_usuario/pp@email.com/paulino/silva/flores/itatiba/SP/121212
    });
    
//FIM AQUI


 
//inicia o servidor
app.listen(port);
console.log('API funcionando!');

function execSQLQuery(sqlQry, res) {
    const connection = mysql.createConnection({

        host: 'localhost',
        port: 3306,
        user: 'admin',
        password: 'p4ul1n0123',
        database: 'sandvigbookstore'

    });

    connection.query(sqlQry, function(error, results, fields) {
        if (error)
            res.json(error);
        else
            res.json(results);
        connection.end();
        console.log('executou!');
    });
}

/*
// FORÇANDO A BARRA PARA CRIA A TABLE DE CLIENTES SEMPRE
try {

    const sql = "CREATE TABLE IF NOT EXISTS Clientes (\n"+
    "ID int NOT NULL AUTO_INCREMENT,\n"+
    "Nome varchar(150) NOT NULL,\n"+
    "CPF char(11) NOT NULL,\n"+
    "PRIMARY KEY (ID)\n"+
    ");";
    
    execSQLQuery(sql, {
        json: (dbresponse) => {
            console.log(dbresponse)
        }
    })
    
} catch (error) {
    
}*/