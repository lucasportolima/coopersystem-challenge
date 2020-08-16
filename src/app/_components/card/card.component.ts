import { Component, Input } from "@angular/core"
import { RepositoryPreview } from '../../_models/repository-preview/repository-preview';

@Component({
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent {
    @Input() repo: RepositoryPreview;

    readMoreCard: boolean = false;

    readMore(e: any) {
        this.readMoreCard = !this.readMoreCard;
        console.log(this.repo);
    }

    copyUrl(e: any) {
        const textArea = document.createElement("textarea");
        textArea.value = e.target.parentElement.getAttribute('data-clone-url');

        document.body.appendChild(textArea);
        textArea.select();

        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'successful' : 'unsuccessful';
            alert('Copying text command was ' + msg);
        } catch (err) {
            alert('Oops, unable to copy');
            window.prompt("Copie para área de transferência: Ctrl+C e tecle Enter", 'text');
        }
    }

    getFullDate(date: string): String {
        const fullDate = new Date(date);
        return `${fullDate.getDate()}/${fullDate.getMonth() + 1}/${fullDate.getFullYear()}`
    }
}
