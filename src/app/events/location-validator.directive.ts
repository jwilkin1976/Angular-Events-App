import { Directive } from "@angular/core";
import { FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: '[validateLocation]',
  // multi: true ensures that we add to rather than replace the existing NG_VALIDATORS
  providers: [{provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true}]
})

export class LocationValidator implements Validator {
  validate(formGroup: FormGroup): ValidationErrors {
    let addressControl = formGroup.controls['address'];
    let cityControl = formGroup.controls['city'];
    let countryControl = formGroup.controls['country'];
    // Navigate up one level within the form to get the onlineUrl control
    let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    // let locationFieldsCompleted = addressControl && addressControl.value
    //                               && cityControl && cityControl.value
    //                               && countryControl && countryControl.value;
    // console.log("location" + locationFieldsCompleted);
    // console.log("onlineUrl" + onlineUrlControl && onlineUrlControl.value);
    // (locationFieldsCompleted) ||

    if ((addressControl && addressControl.value
        && cityControl && cityControl.value
        && countryControl && countryControl.value)
        || (onlineUrlControl && onlineUrlControl.value)) {
      return null;
    } else {
      return {validateLocation: false};
    }

  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }

}
