import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Validator } from '../class/validator';

@Component({
  selector: 'app-formsample',
  templateUrl: './formsample.component.html',
  styleUrls: ['./formsample.component.css']
})
export class FormsampleComponent {
  name = 'adf';
  public readonly networkAddressPattern: string = '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])[¥.]){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$';


  addressForm = this.fb.group({
    // company: null,
    firstName: [null, Validators.compose([
      //Validators.required, Validators.minLength(5), Validators.maxLength(10)])
      Validators.required, Validator.range(5, 10),Validator.rangeLength(3, 6),
    ])
    ],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(5)])
    ],
    postalCode: [null, Validators.minLength(5)],
    shipping: ['free', Validators.required],
    remarks: null,
    picker: null,
  });

  hasUnitNumber = false;

  cities = [
    {name: '千代田区', value: '13101'},
    {name: '中央区', value: '13102'},
    {name: '港区', value: '13103'},
    {name: '渋谷区', value: '13107'},
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.addressForm);
    alert('Thanks!');
  }
}
