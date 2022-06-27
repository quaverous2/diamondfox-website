import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'diamondfox-website';
  lastScrollTop: any;

  @HostListener('window:scroll', []) onWindowScroll() {
    let header = document.getElementById('header');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrollTop);
    if(scrollTop > this.lastScrollTop){
      header!.style.top='-150px';
    }
    else{
      header!.style.top='0';
    }
    // if(scrollTop == 0){
    //   header!.style.backgroundColor='';
    // } else {
    //   header!.style.backgroundColor='white'
    // }
    this.lastScrollTop = scrollTop;
    }
}
