import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CardModule } from "../_components/card/card.module";
import { ErrorsModule } from './errors/errors.module';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { CardsComponent } from '../_components/cards/cards.component';
import { FilterByName } from './repository-list/filter-by-name.pipe';
import { LoadButtonComponent } from '../_components/load-button/load-button.component';
import { UserComponent } from './user/user.component';

@NgModule({
    declarations: [
        RepositoryListComponent,
        CardsComponent,
        FilterByName,
        LoadButtonComponent,
        UserComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        CardModule,
        ErrorsModule
    ]
})

export class PagesModule { }