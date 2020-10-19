import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MyformComponent } from './myform/myform.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'form', component: MyformComponent },
  { path: '**', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
