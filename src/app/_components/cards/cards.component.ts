import { Component, Input } from '@angular/core';

import { RepositoryPreview } from '../../_models/repository-preview/repository-preview';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input() repositorys: RepositoryPreview[];

  constructor() { }
}
