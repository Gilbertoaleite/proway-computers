import { Component, OnInit } from '@angular/core';
import { IdProduto, produtos } from './produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IdProduto[] = produtos;
  constructor() { }

  ngOnInit(): void {
  }

}