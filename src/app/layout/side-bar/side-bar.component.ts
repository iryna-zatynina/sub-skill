import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconSideBarComponent } from './icon-side-bar/icon-side-bar.component';
import { Icons } from 'src/app/core/interfaces/icon';
import { CategoriesSideBarComponent } from './categories-side-bar/categories-side-bar.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, IconSideBarComponent, CategoriesSideBarComponent, BrowserAnimationsModule],
  animations: [
    trigger('fadeInOut', [
      state('close', style({ 
        opcity: '1',
        transform: 'translateY(0)'
      })),
      state('open', style({ 
        opcity: '0',
        transform: 'translateY(+100%)'
      })),
      transition('open <=> close', [       
        animate('500ms ease-in-out')
      ])
    ]),
    trigger('fadeOpenCloseMain', [
      state('open', style({ 
        transform: 'translateY(0)'
      })),
      state('closed', style({
        transform: 'translateY(calc(100% - 40px))'
      })),
      transition('open <=> closed', [
        animate('500ms ease-in-out')
      ])
    ])
  ]
})
export class SideBarComponent {

  public icons: Icons = {
    estate: {
      img: 'url(../../../assets/icons/estate.svg)',
      title: 'Home'
    },
    profile: {
      img: 'url(../../../assets/icons/user.svg)',
      title: 'Profile'
    },
    bookmarks: {
      img: 'url(../../../assets/icons/bookmark.svg)',
      title: 'Bookmarks'
    },
    mySkills: {
      img: 'url(../../../assets/icons/books.svg)',
      title: 'My Skills'
    }
  }
  public iconOrder: string[] = ['estate', 'profile', 'bookmarks', 'mySkills'];

  public languageButtonValue: boolean = false;
  public openCloseLanguage: string = 'closed';

  public languageButton = (): void => {
    this.languageButtonValue = !this.languageButtonValue;
    this.openCloseLanguage = this.languageButtonValue ? 'open' : 'closed';
    console.log(this.openCloseLanguage)
  }



}
