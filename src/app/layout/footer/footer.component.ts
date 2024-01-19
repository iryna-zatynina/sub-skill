import { Component } from '@angular/core';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';
import { SocialButtonComponent } from './social-button/social-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [CommonModule,
    SubscribeFormComponent, SocialButtonComponent],
})
export class FooterComponent {
  public icons: string[] = ['instagram', 'telegram', 'youtube', 'facebook', 'tiktok'];
}
