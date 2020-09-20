import { Component, OnInit, OnChanges, SimpleChanges, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      //useExisting: InputComponent,
      multi: true
    }
  ]
})

export class InputComponent implements OnInit, OnChanges, ControlValueAccessor {
  public placeholder: string;
  public errorText: string;
  public showLabel: boolean = false;
  public isFloat: boolean = false;
  public hasTick: boolean = false;
  public showTick: boolean = false;
  public isError: boolean;
  public showError: boolean;

  @Input() inputLabel: string = '';
  @Input() inputId: string = '';
  @Input() inputType: string = '';
  @Input() isDisabled: boolean = false;
  @Input() hasError: boolean = false;
  @Output() inputBlurEvent: EventEmitter<any> = new EventEmitter();
  @Output() inputFocusEvent: EventEmitter<any> = new EventEmitter();

  public value: string;
  onChange = (arg: any) => { }
  onTouch = () => { }

  ngOnChanges(): void { //changes: SimpleChanges
    if (this.hasError) {
      this.showTick = false;
    } else {
      this.showTick = true;
    }
  }

  ngOnInit(): void {
    this.placeholder = this.inputLabel;
    this.showTick = false;
  }

  inputFocus() {
    this.showError = false;
    this.inputFocusEvent.emit(this.hasError);
  }

  inputBlur() {
    //this.onTouch();
    this.inputBlurEvent.emit(this.hasError);
    if (this.hasError) {
      this.showError = true;
    } else {
      this.showError = false;
    }
  }

  inputText(value: string) {
    console.log(this.placeholder + " = " + value)
    this.value = value;
    this.onTouch();
    this.onChange(this.value);

    if (value.length > 0) {
      this.showLabel = true;
      this.isFloat = true;

    } else {
      this.showLabel = false;
      this.isFloat = false;
      this.showTick = false;
    }
  }

  onInput(value: string) {

  }

  writeValue(value: any): void {
    if (value) {
      if (this.inputType === "date" && value !== undefined && value !== null) {
        let date: string = value.split("T");
        value = date[0]
      }
      this.value = value; // for date format "2019-12-19"

      if (value !== null && value.length > 0) {
        this.showLabel = true;
        this.isFloat = true;

      } else {
        this.showLabel = false;
        this.isFloat = false;
        this.showTick = false;
      }
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
