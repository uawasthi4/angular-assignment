import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
} from "@angular/material";
import { AddCardDialogComponent } from "./add-card-dialog/add-card-dialog.component";
import { CreditCardDirectivesModule } from "angular-cc-library";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HideCardNumberPipe } from "./home/pipes/hide-card-number.pipe";
import { HttpClientModule } from "@angular/common/http";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCardDialogComponent,
    HideCardNumberPipe,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    CreditCardDirectivesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [],
  entryComponents: [AddCardDialogComponent, ConfirmDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
