import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resultado-busca-titulo',
  templateUrl: './resultado-busca-titulo.component.html',
  styleUrls: ['./resultado-busca-titulo.component.css']
})
export class ResultadoBuscaTituloComponent implements OnInit {
  public titulo: any;
  retorno_livros:any; 
  usuario: any;
  constructor( private route: ActivatedRoute, private httpClient: HttpClient) {
    this.route.params.subscribe(params => this.titulo = params['titulo']);
    this.route.params.subscribe(params => this.usuario = params['usuario']);
    this.route.params.subscribe(params => this.usuario = params['usuario']);
    if(this.usuario==null){
      this.usuario = 0;

    }
    
  }

  ngOnInit() { 
    this.retorno_livros = [];
       
      const req = this.httpClient.get('http://localhost:3000/busca_livro/'+this.titulo).toPromise();
  
      req.then((livros) => {
        this.retorno_livros = livros;
        console.log(livros);
      
    });
      
    //window.location.reload();
}
 
}
