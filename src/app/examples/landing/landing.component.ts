import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { log } from 'console';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  data : Date = new Date();
  focus;
  focus1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private viewportScroller: ViewportScroller
) {}

  ngOnInit() {
    console.log('HELOOOO:');
     // Subscribe to router events
     this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // After navigation is done, check for the fragment
        this.route.fragment.subscribe((fragment) => {
          if (fragment) {
            setTimeout(() => {
              this.viewportScroller.scrollToAnchor(fragment); // Scroll to the anchor
            }, 100); // Add a slight delay to ensure content is loaded
          }
        });
      }
    });
  //   this.route.fragment.subscribe((fragment) => {
  //     if (fragment) {
  //         console.log('Fragment: ',fragment);
  //         this.viewportScroller.scrollToAnchor(fragment);
  //     }
  // });
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
