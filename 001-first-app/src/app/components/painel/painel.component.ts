import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

import { Frase } from 'src/app/shared/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public traduza: string = 'Traduza a frase:';
  public frases: Array<Frase> = FRASES;
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase!: Frase;

  public progresso: number = 0;

  public tentativas: number = 3;

  @Output()
  public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada()
    this.rodadaFrase = this.frases[this.rodada];
    // console.log(this.rodadaFrase);
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    alert('Componente destruído!')
    
  }

  public atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta() {
    // console.log(this.tentativas)
    // console.log('Verificar resposta: ', this.resposta)
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      
      this.rodada++

      if(this.rodada === 4) {
        this.encerrarJogo.emit('vitória')
      }
      //atualiza o objeto rodadaFrase
      this.atualizaRodada()

      //progresso
      this.progresso = this.progresso + (100 / this.frases.length)
      
      
    } else {
      this.tentativas--
      
      if(this.tentativas === -1) {
       this.encerrarJogo.emit('derrota')
      }
      // console.log(this.tentativas)
    }
  }
  
  public atualizaRodada(): void{
    //define a frase da rodada com base em alguma lógica 
    this.rodadaFrase = this.frases[this.rodada]
    //limpar a resposta
    this.resposta = ''
  }
}
