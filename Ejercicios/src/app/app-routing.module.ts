import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { InstagramComponent } from './instagram/instagram.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';


const routes: Routes = [
  {path:'',component:MenuComponent},
  {path:'instagram',component:InstagramComponent},
  {path:'whatsapp',component:InstagramComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
