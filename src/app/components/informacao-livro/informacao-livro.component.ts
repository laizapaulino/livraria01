import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { isBoolean } from 'util';

@Component({
  selector: 'app-informacao-livro',
  templateUrl: './informacao-livro.component.html',
  styleUrls: ['./informacao-livro.component.css']
})
export class InformacaoLivroComponent implements OnInit {
  public isbn: any;
  livro_descricao:any;
  categorias:any;
  autores:any;
  texto:any;
  usuario: any;

  constructor( private route: ActivatedRoute, private httpClient: HttpClient) {
    this.route.params.subscribe(params => this.isbn = params['isbn']);
    this.route.params.subscribe(params => this.usuario = params['usuario']);
  }
  ngOnInit() {
    this.livro_descricao = [];
     
      
      const req = this.httpClient.get('http://localhost:3000/description2/'+this.isbn).toPromise();
  
      req.then((descricoes) => {
        this.livro_descricao = descricoes;
        var parser = new DOMParser();
        
        this.texto =  parser.parseFromString( descricoes[0].description, 'text/html');

        console.log(descricoes);
      });

      const req2 = this.httpClient.get('http://localhost:3000/categoria_livro/'+this.isbn).toPromise();
  
      req2.then((descricoes) => {
        this.categorias = descricoes;
        console.log(this.categorias);        
      });

      const req3 = this.httpClient.get('http://localhost:3000/autores/'+this.isbn).toPromise();
  
      req3.then((descricoes) => {
        this.autores = descricoes;
        console.log(this.autores);        
      });
  }


}
