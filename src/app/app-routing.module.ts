import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './veiws/components/about/about.component';
import { HireUsComponent } from './veiws/components/hire-us/hire-us.component';
import { HomeComponent } from './veiws/components/home/home.component';
import { WorkComponent } from './veiws/components/work/work.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'fader'}
  },
  {
    path: 'work',
    component: WorkComponent,
    data: { animation: 'fader'}
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'fader'}
  },
  {
    path: 'hire-us',
    component: HireUsComponent,
    data: { animation: 'fader'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
