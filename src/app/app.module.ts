import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './form/registration-form/registration-form.component';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { CardsItemComponent } from './cards-item/cards-item.component';
import { InjecaoLoginComponent } from './injecao-login/injecao-login.component';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from './search-input/search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    ModalFormComponent,
    NavbarComponent,
    CardComponent,
    CardsItemComponent,
    InjecaoLoginComponent,
    SearchInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
