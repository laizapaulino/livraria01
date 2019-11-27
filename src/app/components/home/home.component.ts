import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  livros_description:any;
  resposta: any;
  usuario:number = 0;
  n1:number = Math.floor(Math.random() * (1 - 17 + 1)) + 17;
  n2:number =  Math.floor(Math.random() * (1 - 17 + 1)) + 17 ;
  n3:number =  Math.floor(Math.random() * (1 - 17 + 1)) + 17;

  constructor( private route: ActivatedRoute, private httpClient: HttpClient) {
    
    this.route.params.subscribe(params => this.usuario = params['usuario']);
    if(this.usuario==null){
      this.usuario = 0;

    }
  }
    
    ngOnInit() {
      this.livros_description = [];
      while(this.n1 == this.n2 || this.n1 == this.n3 || this.n2 == this.n3){
        this.n1 = Math.floor(Math.random() * (1 - 17 + 1)) + 17;
        this.n2 = Math.floor(Math.random() * (1 - 17 + 1)) + 17;
        this.n3 = Math.floor(Math.random() * (1 - 17 + 1)) + 17;
      }
      
      console.log(this.n1);
      console.log(this.n2);
      console.log(this.n3);
      const req = this.httpClient.get('http://localhost:3000/description').toPromise();
  
      req.then((descricoes) => {
        this.livros_description = descricoes;
      })
  
    }

}
