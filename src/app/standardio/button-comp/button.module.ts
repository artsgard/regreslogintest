import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule { }