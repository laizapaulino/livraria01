import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-area-usuario',
  templateUrl: './area-usuario.component.html',
  styleUrls: ['./area-usuario.component.css']
})
export class AreaUsuarioComponent implements OnInit {
  usuario_cadastro:any= {'email':'',
                'name':'',
                'sobrenome':'',
                'street':'',
                'city':'',
                'state':'',
                'zip':''
              };
  email:any;
  lista_usuario:any;
  resposta: any;
  usuario_logado:any;
  

 usuario: any; 


  constructor( private route: ActivatedRoute, private httpClient: HttpClient) {
    this.route.params.subscribe(params => this.usuario = params['usuario']);
    if(!this.usuario){

      this.usuario = 0;

    }else{
      const req = this.httpClient.get("http://localhost:3000/customer_id/"+this.usuario).toPromise();
    req.then((resposta) => {
      this.usuario_logado = resposta;
      console.log(resposta);
    }).catch((erro) => {
      this.resposta = erro;
    });
    }
  }
 
  ngOnInit() {
    
  }
   cadastra(){
    const req = this.httpClient.post("http://localhost:3000/cadastra_usuario/", this.usuario_cadastro).toPromise();
    this.usuario=this.usuario_cadastro.nome;
    req.then((resposta) => {
      //chamar login
      this.resposta = resposta;
    }).catch((erro) => {
      this.resposta = erro;
    });
   }

   login(){
    const req = this.httpClient.get("http://localhost:3000/customer_email/"+this.email).toPromise();
    req.then((resposta) => {
      this.usuario_logado = resposta;
      this.usuario = this.usuario_logado[0].id;
      window.location.href = 'area-usuario/'+this.usuario;
      console.log(this.usuario_logado[0].id);
    }).catch((erro) => {
      this.resposta = erro;
    });

   }

}
