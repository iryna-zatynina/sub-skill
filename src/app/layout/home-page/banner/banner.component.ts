import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogCardService } from 'src/app/core/services/catalog-card.service';
import { CatalogCard } from 'src/app/core/interfaces/catalog';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingComponent } from 'src/app/shared/components/star-rating/star-rating.component';
import { TruncateDirective } from 'src/app/shared/directives/truncate.directive';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule,
    NgbCarouselModule,
    StarRatingComponent,
    TruncateDirective,
    RouterModule,
  ],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent implements OnDestroy {
  public slides$!: Observable<CatalogCard[]>;
  private destroy$ = new Subject<void>();
  constructor(
    private cardService: CatalogCardService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.slides$ = this.cardService.getCatalogCards().pipe(
      map(cards =>
        cards.map(card => ({
          ...card,
          imageUrl: this.sanitizer.bypassSecurityTrustUrl(
            `data:image/png;base64,${card.photo}`
          ),
        }))
      ),
      takeUntil(this.destroy$)
    );
  }
  getSafeImageUrl(photo: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustUrl(
      `data:image/png;base64,${photo}`
    );
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
