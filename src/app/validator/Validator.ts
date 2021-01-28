import {AbstractControl, FormControl} from "@angular/forms";
import moment = require("moment/ts3.1-typings/moment");

export class MyValidator {

  static yearValidator(control: FormControl): {[key: string]: boolean} {

  }

  static minSalaryForTwenty(control: FormControl): {[key: string]: boolean} {
    if (control.value){
      const date = 2001;
      const  today =  moment().year();
      if (today - date < 20){
        if (control.value < 200)
        return {
          minSalaryForTwenty: true
        }
      }
    }
    return null;
  }
}

