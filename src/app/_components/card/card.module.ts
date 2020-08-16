import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [CardComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [CardComponent]
})
export class CardModule { }