import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { AddCardDialogComponent } from "../add-card-dialog/add-card-dialog.component";
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";
import { LocalStorageService } from "./services/local-storage.service";

export interface ICard {
  cardNumber: string;
  cardType: "visa" | "amex" | "mastercard";
  expiryMonth: number;
  expiryYear: number;
  cvv: number;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  public cards: ICard[] = [];
  public ngOnInit() {
    const localStorageData = this.localStorageService.get("cardData");

    if (localStorageData) {
      this.cards = localStorageData;
    } else {
      this.httpClient.get("assets/cardData.json").subscribe((data: ICard[]) => {
        this.cards = data;
        this.localStorageService.set("cardData", data);
      });
    }
  }

  public openAddCardDialog(): void {
    const dialogRef = this.dialog.open(AddCardDialogComponent, {
      width: "770px",
    });

    dialogRef.afterClosed().subscribe((result: ICard) => {
      if (result) {
        this.cards.push(result);
        this.localStorageService.set("cardData", this.cards);
      }
    });
  }
  public removeCard(index): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "700px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.cards.splice(index, 1);
        this.localStorageService.set("cardData", this.cards);
      }
    });
  }
}
