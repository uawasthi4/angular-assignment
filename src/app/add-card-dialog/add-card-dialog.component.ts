import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { CreditCardValidators } from "angular-cc-library";

@Component({
  selector: "app-add-card-dialog",
  templateUrl: "./add-card-dialog.component.html",
  styleUrls: ["./add-card-dialog.component.scss"],
})
export class AddCardDialogComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddCardDialogComponent>
  ) {}

  public months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  public years = [
    2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032,
    2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041,
  ];

  public cardType: string;

  @ViewChild("ccNumber", { static: true }) ccNumber: ElementRef;
  public ccForm: FormGroup;
  public submitted = false;
  public ngOnInit() {
    this.ccForm = this.formBuilder.group({
      cardNumber: [
        null,
        [CreditCardValidators.validateCCNumber, Validators.required],
      ],
      expiryYear: [null, [Validators.required]],
      expiryMonth: [null, [Validators.required]],
      cvv: [
        null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(4)],
      ],
    });
  }

  public ngAfterViewInit(): void {
    (this.ccNumber as any).resolvedScheme$.subscribe((value) => {
      this.cardType = value;
    });
  }

  public getCCErrorMessage() {
    const ccControl = this.ccForm.controls.cardNumber;
    if (ccControl.hasError("required")) {
      return "You must enter a value";
    }

    return ccControl.hasError("ccNumber") ? "Not a valid card number" : "";
  }

  public onSubmit() {
    this.ccForm.markAllAsTouched();
    this.submitted = true;
    if (this.ccForm.valid) {
      const updatedCardNumber = this.ccForm.value.cardNumber
        .split(" ")
        .join("");
      delete this.ccForm.value.cardNumber;
      this.dialogRef.close(
        Object.assign(this.ccForm.value, {
          cardType: this.cardType,
          cardNumber: updatedCardNumber,
        })
      );
    }
  }
}
