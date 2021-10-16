import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "hideCardNumberPipe",
})
export class HideCardNumberPipe implements PipeTransform {
  transform(cardNumber: string, showNumbers: number): string {
    let firstVisibleNumbers = cardNumber.slice(0, showNumbers);
    let maskedNumbers = cardNumber.slice(showNumbers, -showNumbers);
    let lastVisibleNumbers = cardNumber.slice(-showNumbers);
    return (
      firstVisibleNumbers +
      maskedNumbers.replace(/./g, "X") +
      lastVisibleNumbers
    );
  }
}
