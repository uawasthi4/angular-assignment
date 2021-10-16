import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "angular-assignment";
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.addSvgIcons();
  }

  private addSvgIcons(): void {
    this.matIconRegistry.addSvgIcon(
      `visa`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`./assets/visa_logo.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `amex`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`./assets/amex_logo.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `mastercard`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/mastercard_logo.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      `cvv`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`./assets/cvv_icon.svg`)
    );
  }
}
