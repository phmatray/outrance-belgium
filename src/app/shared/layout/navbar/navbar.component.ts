import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { faFacebookF, faSoundcloud } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  @ViewChild('navBurger', {static: false}) navBurger: ElementRef;
  @ViewChild('navMenu', {static: false}) navMenu: ElementRef;
  isBurgerActive: boolean;

  /* Font Awesome icons */
  faFacebookF = faFacebookF;
  faSoundcloud = faSoundcloud;

  constructor() { }

  ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('has-navbar-fixed-top');
  }

  ngOnDestroy(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('has-navbar-fixed-top');
  }

  toggleBurger($event: MouseEvent) {
    this.isBurgerActive = !this.isBurgerActive;
  }
}
