import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input-comp/input.component';
import { ButtonComponent } from './button-comp/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ButtonComponent, InputComponent],
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule
    ],
    exports: [
        ButtonComponent,
        InputComponent,
    ]
})
export class StandardIoModule { }


