import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardMask',
  standalone: true
})
export class CreditCardMaskPipe implements PipeTransform {

  transform(creditCardNumber: string): string {
    if (!creditCardNumber || creditCardNumber.length !== 16) {
      return creditCardNumber;
    }
    return creditCardNumber.replace(/^(\d{4})\d{8}(\d{4})$/, '$1 **** **** $2');
  }
}
