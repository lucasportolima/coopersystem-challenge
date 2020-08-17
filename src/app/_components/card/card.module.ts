import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CardComponent } from './card.component';

@NgModule({
    declarations: [CardComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [CardComponent]
})
export class CardModule { }