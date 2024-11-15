import { Location, ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import * as Rellax from 'rellax';
import { filter } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  data : Date = new Date();
  focus;
  focus1;

  constructor(
    private route: ActivatedRoute,
    private location:Location
) {}
  ngAfterViewInit(): void {
   
    // const url = this.router.url;
    // const urlParts = url.split("#");
    // console.log(`URL: ${url} | urlParts: ${urlParts}`);
    // if(urlParts.length > 0){
    //   const fragment1 =`#${url.split("#")[1]}`;
    //   console.log(`Fragment: ${fragment1}`);
    //   // Subscribe to router events and check for NavigationEnd
    // this.router.events
    // .pipe(filter(event => event instanceof NavigationEnd))
    // .subscribe((event2) => {
    //   console.log("EVENT ",event2);
    //       setTimeout(() => {
    //         // Scroll to the element with the ID matching the fragment
    //         this.viewportScroller.scrollToAnchor(fragment1);
    //       }, 5000); // Adjust delay as needed
    // });
    // }
  }

  ngOnInit() {
    this.route.queryParams.subscribe(fragment => {
      const element = document.getElementById(fragment.section);
      console.log("url location",this.location.path());
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 200);
       
      }
    });
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
