import { Component, Input } from "@angular/core"
import { RepositoryPreview } from '../../_models/repository-preview/repository-preview';
import { swalNotification } from 'src/app/_helper/SwalNotification';

@Component({
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent {
    @Input() repo: RepositoryPreview;

    readMoreCard: boolean = false;

    readMore(e: any): void {
        this.readMoreCard = !this.readMoreCard;
    }

    async copyUrl(e: any): Promise<void> {
        const textArea = document.createElement("textarea");
        textArea.value = e.target.getAttribute('data-clone-url');

        document.body.appendChild(textArea);
        textArea.select();
        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'successful' : 'unsuccessful';
            await swalNotification('success', `Copying text command was ${msg}`);
        } catch (err) {
            await swalNotification('error', `Oops, unable to copy`);
            window.prompt("Copie para área de transferência: Ctrl+C e tecle Enter", 'text');
        }
        textArea.parentNode.removeChild(textArea);
    }

    getFullDate(date: string): String {
        const fullDate = new Date(date);
        return `${fullDate.getDate()}/${fullDate.getMonth() + 1}/${fullDate.getFullYear()}`
    }
}
