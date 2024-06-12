import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardTwoComponent } from './product-card-two.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../pipes/pipes.module';

import {MaterialModule} from "../../../material/material.module";



@NgModule({
    declarations: [
        ProductCardTwoComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        PipesModule,
      // TranslateModule,
      MaterialModule,
    ],
    exports: [
        ProductCardTwoComponent
    ]
})
export class ProductCardTwoModule { }
