import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './components/home/home.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { AreaUsuarioComponent } from './components/area-usuario/area-usuario.component';
import { InformacaoLivroComponent } from './components/informacao-livro/informacao-livro.component';

import { CommonModule } from '@angular/common';
import { from } from 'rxjs';
import { RetornoCategoriaComponent } from './components/retorno-categoria/retorno-categoria.component';
import { ResultadoBuscaTituloComponent } from './components/resultado-busca-titulo/resultado-busca-titulo.component';

const routes: Routes = [
  { path: 'home/:usuario', component: HomeComponent },
  { path: 'home', component: HomeComponent },//sem a barra

  { path: 'carrinho/:usuario', component: CarrinhoComponent },
  { path: 'add-carrinho/:usuario/:isbn', component: CarrinhoComponent },
  
  { path: 'area-usuario/:usuario', component: AreaUsuarioComponent },
  { path: 'informacao-livro/:usuario/:isbn', component: InformacaoLivroComponent },
  { path: 'categoria/:usuario/:cat', component: RetornoCategoriaComponent },
  { path: 'busca_titulo/:usuario/:titulo', component: ResultadoBuscaTituloComponent }

];


@NgModule({
  declarations: [],

  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
