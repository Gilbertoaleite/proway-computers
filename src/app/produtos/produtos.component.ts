import { Component, OnInit } from '@angular/core';
// import { NotificacaoService } from '../notificacao.service';
import { ProdutosService } from '../produtos.service';
import { IdProduto } from './produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IdProduto[] | undefined;
  constructor(
    private produtosService: ProdutosService,
    // private notificacaoService: NotificacaoService
  ) { }

  ngOnInit(): void {
    this.produtos = this.produtosService.getAll();
  }


}
