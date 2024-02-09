import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { CatalogCartService } from 'src/app/core/services/catalog-cart.service';
import { Observable } from 'rxjs';
import { CatalogCart } from 'src/app/core/interfaces/catalog';

@Component({
  selector: 'catalog-cart',
  standalone: true,
  imports: [CommonModule, StarRatingComponent],
  templateUrl: './catalog-cart.component.html',
  styleUrls: ['./catalog-cart.component.scss']
})
export class CatalogCartComponent {
  @Input() public cart!: CatalogCart;
  
}
