import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoryListComponent } from './repository-list.component';
import { CardsComponent } from '../../_components/cards/cards.component';
import { LoadButtonComponent } from '../../_components/load-button/load-button.component';
import { FilterByName } from './filter-by-name.pipe';
import { PagesModule } from '../pages.module';
import { DarkenOnHoverModule } from '../../_directives/darken-on-hover/darken-on-hover.module';

@NgModule({
  declarations: [
    RepositoryListComponent,
    CardsComponent,
    LoadButtonComponent,
    FilterByName
  ],
  imports: [
    CommonModule,
    PagesModule,
    DarkenOnHoverModule
  ]
})
export class RepositoryListModule { }