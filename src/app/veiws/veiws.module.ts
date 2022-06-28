import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HireUsComponent } from './components/hire-us/hire-us.component';
import { WorkComponent } from './components/work/work.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WorkComponent,
    AboutComponent,
    HireUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WorkComponent,
    AboutComponent,
    HireUsComponent
  ]
})
export class VeiwsModule { }
