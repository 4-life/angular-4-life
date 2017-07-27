import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './about.routing';

import { AboutComponent } from './about.component';

import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
  imports: [
    AboutRoutingModule
  ],
  declarations: [
    AboutComponent,
    NavbarComponent
  ]
})

export class AboutModule { }
