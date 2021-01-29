import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import moment = require("moment/ts3.1-typings/moment");

export class MyValidator {

  // static yearValidator(control: FormControl): { [key: string]: boolean } {
  //
  // }

  static minSalaryForTwenty: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    const dateOfBirthday = control.get('date');
    const salary = control.get('salary');
    const today = moment().year();

    if (today - new Date(dateOfBirthday?.value).getFullYear() < 20) {
      if (salary?.value < 200)
        return {
          minSalaryForTwenty: true
        }
    }
    return null;
  }
}

