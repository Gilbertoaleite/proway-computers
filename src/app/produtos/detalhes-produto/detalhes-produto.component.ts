import { Component, OnInit } from '@angular/core';
import { IdProduto, produtos } from '../produtos';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produtos: IdProduto[] = produtos;
  constructor() { }

  ngOnInit(): void {
  }

}
