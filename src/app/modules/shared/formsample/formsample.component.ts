import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Validator } from '../class/validator';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-formsample',
  templateUrl: './formsample.component.html',
  styleUrls: ['./formsample.component.css']
})
export class FormsampleComponent {
  name = 'adf';
  public readonly networkAddressPattern: string = '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])[¥.]){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$';

  filteredStates: Observable<State[]>;
  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];

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

  constructor(private fb: FormBuilder) {
    // this.filteredStates = this.stateCtrl.valueChanges
    // .pipe(
    //   startWith(''),
    //   map(state => state ? this._filterStates(state) : this.states.slice())
    // );
  }
  /**
   * オートコンプリートのフィルタ
   * @param value 
   */
  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  onSubmit() {
    console.log(this.addressForm);
    alert('Thanks!');
  }
}
