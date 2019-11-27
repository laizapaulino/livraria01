import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { AreaUsuarioComponent } from './components/area-usuario/area-usuario.component';
import { InformacaoLivroComponent } from './components/informacao-livro/informacao-livro.component';
import {CookieService} from 'ngx-cookie-service';
import { StorageServiceModule} from 'angular-webstorage-service';
import { StorageService } from './services/storage.service';
import { RetornoCategoriaComponent } from './components/retorno-categoria/retorno-categoria.component';
import { ResultadoBuscaTituloComponent } from './components/resultado-busca-titulo/resultado-busca-titulo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CarrinhoComponent,
    AreaUsuarioComponent,
    InformacaoLivroComponent,
    RetornoCategoriaComponent,
    ResultadoBuscaTituloComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StorageServiceModule
  ],
  providers: [CookieService,
    CarrinhoComponent, 
    StorageService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
