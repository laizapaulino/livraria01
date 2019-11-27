import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-retorno-categoria',
  templateUrl: './retorno-categoria.component.html',
  styleUrls: ['./retorno-categoria.component.css']
})
export class RetornoCategoriaComponent implements OnInit {
  public categoria: any;
  retorno_livros:any; 
  nome_categoria:string ='';
  constructor( private route: ActivatedRoute, private httpClient: HttpClient) {
    this.route.params.subscribe(params => this.categoria = params['cat']);
    
  }
  ngOnInit() {

    this.retorno_livros = [];
     
      
      const req = this.httpClient.get('http://localhost:3000/categoria/'+this.categoria).toPromise();
  
      req.then((categoria) => {
        this.retorno_livros = categoria;
        this.nome_categoria = categoria[0].CategoryName;
        console.log(categoria[0].ISBN);
        
      });
      
      //window.location.reload();
  }

  
}
