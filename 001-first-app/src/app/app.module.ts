import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './components/topo/topo.component';
import { PainelComponent } from './components/painel/painel.component';
import { TentativaComponent } from './components/tentativa/tentativa.component';
import { ProgressoComponent } from './components/progresso/progresso.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PainelComponent,
    TentativaComponent,
    ProgressoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
