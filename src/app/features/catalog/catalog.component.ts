import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogCartComponent } from './catalog-cart/catalog-cart.component';
import { Observable } from 'rxjs';
import { CatalogCartService } from 'src/app/core/services/catalog-cart.service';
import { CatalogCart, CatalogCarts } from 'src/app/core/interfaces/catalog';

@Component({
  selector: 'catalog',
  standalone: true,
  imports: [CommonModule, CatalogCartComponent],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit{
  constructor(private cartService: CatalogCartService) { }

  public catalogCarts$!: Observable<[CatalogCart]>;

  public ngOnInit(): void {
    this.catalogCarts$ = this.cartService.getCatalogCarts();
    console.log(this.catalogCarts$);
  }

}
