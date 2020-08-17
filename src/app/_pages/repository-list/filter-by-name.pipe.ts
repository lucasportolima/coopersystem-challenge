import { Pipe, PipeTransform } from '@angular/core';

import { RepositoryPreview } from '../../_models/repository-preview/repository-preview';

@Pipe({ name: 'filterByName' })
export class FilterByName implements PipeTransform {

    transform(repositorys: RepositoryPreview[], descriptionQuery: string): RepositoryPreview[] {
        descriptionQuery = descriptionQuery.trim().toLowerCase();

        if (descriptionQuery) {
            return repositorys.filter(repository =>
                repository
                    .name
                    .toLowerCase()
                    .includes(descriptionQuery)
            );
        } else {
            return repositorys;
        }
    }

}