import { Component,OnInit} from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';

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
      
      ])
  });

  ngOnInit(): void {
    
  }

}
