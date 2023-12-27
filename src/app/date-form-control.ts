import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  override setValue(value: any, options: any) {
    console.log('Gelen değer: ' + value + 'Komponent değeri: ' + this.value);
    //super.setValue(value,options);

    if (!value) {
      //Boş değeri setle. optionsdaki emitModelToViewChange:true ifadesi de anında görüntüye yansıması için
      super.setValue('', { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.match(/[^0-9||\/]/gi)) {
      //Geçersiz değer giriyorsa şimdiye kadar olan değerleri geri dön
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    //Arkadaki değer / lı ifade almasın
    if (value.length === 2 && this.value.length === 3) {
      super.setValue(value, { ...options, emitModelToViewChange: true });
      return;
    }

    //Otomatik slash koysun
    if (value.length === 2) {
      super.setValue(value + '/', { ...options, emitModelToViewChange: true });
      return;
    }

    //5 karakteri geçmesin
    if (value.length > 5) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    super.setValue(value, { ...options, emitModelToViewChange: true });
  }
}
