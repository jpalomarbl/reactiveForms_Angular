import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function checkInvalidKeyWord(nameRe: RegExp): ValidatorFn {
    // Validation functions must return a ValidatorFn object
    return(control: AbstractControl): ValidationErrors | null => {
        const forbidden = nameRe.test(control.value);

        // If the input and the regex match, the input will be invalid
        // and the function will return the ValidationErrors object invalidKeyWord.
        // And if they don't, the input is valid, so the function returns null. 

        return forbidden ? {invalidKeyWord: {value: control.value}} : null;
    };
}