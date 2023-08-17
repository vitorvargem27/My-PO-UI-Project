import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent,
  },

  {
    path: 'app-home', component: HomeComponent,
  },

  {
    path: 'app-header', component: HeaderComponent,
  },

  {
    path: 'app-footer', component: FooterComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
