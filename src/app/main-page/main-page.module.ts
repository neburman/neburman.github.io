import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MainPageComponent,
    ContactoComponent,
    NoticiasComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [MainPageComponent, NavbarComponent, ContactoComponent, FooterComponent, NoticiasComponent],
})
export class MainPageModule {}
