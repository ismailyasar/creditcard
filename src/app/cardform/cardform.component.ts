import { Component,OnInit} from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrls: ['./cardform.component.css']
})
export class CardformComponent implements OnInit {

  //form group ve onun içindeki form elemanlarını tanımlamak için kullanıyoruz. (Reactive form kullanımı)
  cardForm = new FormGroup({
    name:new FormControl(null,
      [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)      
      ]),
    cardNumber:new FormControl(null,
      [Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16)      
      ]),
    expiration:new DateFormControl(null,
      [Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)     
      ]),
    securityCode : new FormControl(null,
      [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3)      
      ])        
  });
  

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log('Submit gerçekleşti')
  }

  resetForm(){
    this.cardForm.reset();
  }

}
