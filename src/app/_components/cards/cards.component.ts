import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RepositoryPreview } from '../../_models/repository-preview/repository-preview';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnChanges {

  @Input() repositorys;
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.repositorys)
      this.rows = this.groupColumns(this.repositorys);
  }

  groupColumns(repositorys: RepositoryPreview[]) {
    const newRows = [];

    for (let index = 0; index < repositorys.length; index += 3) {
      newRows.push(repositorys.slice(index, index + 3));
    }

    return newRows;
  }

}
