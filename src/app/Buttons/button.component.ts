import { Component,Input } from '@angular/core';
import { SOLID_BUTTON_TYPE_ENUM } from './solid-button-type.enum';

@Component({
  selector: 'button-list',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  {
@Input() title ='';
@Input() type:SOLID_BUTTON_TYPE_ENUM = SOLID_BUTTON_TYPE_ENUM.PRIMARY;
@Input() url;
  constructor() { }


}
