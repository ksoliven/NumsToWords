import { Pipe, PipeTransform } from '@angular/core';

Pipe({
    name: 'numsToWordsPipe'
})

/**
 * Pipe used to show numbers 1 to 100 in word format.
 */

export class NumsToWordsPipe implements PipeTransform {
    ten = 10;
    oneHundred = 100;

    lessThanTwenty = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
        'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    tenthsLessThanOneHundred = [
        'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
        'eighty', 'ninety'
    ];

    /** 
     * @param value Number to show as word
    */

    transform(value: number): string {
        let remainder = 0;
        let word = '';

        if (value == 0) {
            return 'zero'
        }

        if (value < 20) {
            word = this.lessThanTwenty[value];
        }
        else if (value < this.oneHundred) {
            remainder = value % this.ten;
            word = this.tenthsLessThanOneHundred[Math.floor(value / this.ten)];

            if (remainder) {
                word += `${this.lessThanTwenty[remainder]}`;
                remainder = 0;
            }
        }
        else {
            word = 'Numbers over 99 are out of range.';
        }
        return word;
    }

}