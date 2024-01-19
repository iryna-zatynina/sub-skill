import { Component } from '@angular/core';

@Component({
  selector: 'social-button',
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.scss'],
  standalone: true,
})
export class SocialButtonComponent {
  // public className: string = 'social-button'; 
  public icon: string = '';
}
