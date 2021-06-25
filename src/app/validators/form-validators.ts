import { FormControl, ValidationErrors } from '@angular/forms';

export class FormValidators {
  
    // whitespace validation
    static notOnlyWhitespace(control: FormControl): ValidationErrors {
        if (control.value != null && control.value.trim().length === 0) {
            //invalid - return error object
            return { notOnlyWhitespace: true };
        } 
        else {
            //valid return null
            return null;
        }
    }

    // date validation
    static dateValidation(control: FormControl): ValidationErrors {
        if (control.value != null && control.value.trim().length === 0) {
        //invalid - return error object
        return { dateValidation: true };
    } 
    else if (!control.value.includes('/')) {
        return { dateValidation: true };
    } 
    else {
        //valid return null
        return null;
    }
  }

    static monthValidation(control: FormControl): ValidationErrors {
        let arr = control.value.split('/');
        // console.log(arr)
        if (arr[0].length == 1 || arr[0].length == 2) {
            if (arr[0] < 1) {
                console.log('<1');
                return { monthValidation: true };
            } 
            else if (arr[0] > 12) {
                console.log('>12');
                return { monthValidation: true };
            } 
            else {
                console.log('1 and 12');
                return null;
            }
        } 
        else 
        {
            console.log('length less than 2');
            return { monthValidation: true };
        }
    }

}
