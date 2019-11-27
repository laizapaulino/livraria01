import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { StorageService } from '../../services/storage.service';

const carrinhoStorageKey = 'carrinho';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
/*CREATE TABLE carrinho(
	isbn varchar(25),
    quantidade int,
    FOReign KEY (isbn) REFERENCES 
);*/ 


export class CarrinhoComponent implements OnInit {
  //Input() data ='';  
  itensCarrinho:any = [];
  livro_descricao:any = null;
  public isbn: any = 0;
  private cookieCarrinho :any;
  cookieService: any;
  todoList: any;
  localStore:WindowLocalStorage;
  resposta: any;
  usuario: any;
  
  constructor( private route: ActivatedRoute, private httpClient: HttpClient, 
    private storageService: StorageService) {
      this.route.params.subscribe(params => this.isbn = params['isbn']);
      this.route.params.subscribe(params => this.usuario = params['usuario']);
      if(this.usuario==''){

        this.usuario = 0;

      }
      console.log(this.usuario);
    }

  
  ngOnInit() {
      if(this.isbn != undefined){
        this.addItem(this.isbn);
        window.location.href ='carrinho/'+this.usuario;

      }
      this.route.params.subscribe(params => {
        const req = this.httpClient.get('http://localhost:3000/tudo_carrinho/').toPromise();
    
        req.then((itens) => {
          this.itensCarrinho = itens;
          console.log(itens);
        })
      });

}


addItem(item: any) {
  this.route.params.subscribe(params => {
    const req = this.httpClient.get('http://localhost:3000/busca_livro/'+item).toPromise();

    req.then((descricoes) => {
      this.livro_descricao = descricoes;
    })
  });
  if(!this.livro_descricao){
    

    this.route.params.subscribe(params => {
      let dados = {'quantidade':1,'livro':item};
      const req = this.httpClient.post('http://localhost:3000/add/cart/',dados).toPromise();
  
      req.then((resposta) => {
        this.resposta = resposta;
        console.log(this.resposta);
      }).catch((erro) => {
        this.resposta = erro;
        console.log(this.resposta);
      });
    });
  }else{

  }

  //this.itensCarrinho.push(item);
  //this.storageService.setData(carrinhoStorageKey, this.itensCarrinho);
  
}

updateItem(item: any, changes) {
 
}
 

}
