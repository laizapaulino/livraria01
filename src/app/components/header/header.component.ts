import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categorias:any;
  resposta: any;
  pesquisa:string;
  usuario: any = 0;

  constructor( private route: ActivatedRoute, private httpClient: HttpClient) {
    this.route.params.subscribe(params => this.usuario = params['usuario']);
    if(!this.usuario){
      this.usuario = 0;

    }
    
  }
 
  ngOnInit() {
    this.categorias = [];
    this.pesquisa = '';
    
    const req = this.httpClient.get('http://localhost:3000/categorias').toPromise();

    req.then((categorias_retornadas) => {
      this.categorias = categorias_retornadas;
    })

  }

}
