import { Component, OnInit, OnChanges, SimpleChanges, Input, forwardRef } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {

  imgBase = '../../../../assets/img/';
  public hasIcon: boolean = false;
  public hasLeftIc: boolean = false;
  @Input() buttonLabel: string = 'Some text';
  @Input() hasLeftIcon: boolean;
  @Input() buttonIcon: string = '';
  @Input() buttonColor: string = 'yellow';
  @Input() inputType: string = 'button';
  @Input() isDisabled: boolean = false;
 
  ngOnInit(): void {
    if (this.buttonIcon !== '') {
      this.buttonIcon = this.imgBase + this.buttonIcon;
      this.hasIcon = true;
      this.hasLeftIcon = false;
    }
   
  }

  click() {
    // not empty
  }
}