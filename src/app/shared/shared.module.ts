import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [],
    exports: [MaterialModule,CommonModule],
    providers: [],
})
export class SharedModule { }
