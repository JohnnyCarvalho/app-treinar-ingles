import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Coracao } from 'src/app/shared/coracao.model';

@Component({
  selector: 'app-tentativa',
  templateUrl: './tentativa.component.html',
  styleUrls: ['./tentativa.component.css']
})
export class TentativaComponent implements OnInit, OnChanges {

  @Input() public tentativas!: number;

  public coracoes: Array<Coracao> = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() { 
  
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    //Diminuir corações
    if (this.tentativas !== this.coracoes.length) {
      let i = this.coracoes.length - this.tentativas;

      this.coracoes[i - 1].cheio = false
    }
  }

  ngOnInit(): void {
    
    
  }

}
