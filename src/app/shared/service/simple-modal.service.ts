import { Injectable, Output, EventEmitter } from '@angular/core';
import { SimpleModal } from '../model/simple-modal.model';


@Injectable({ providedIn: 'root' })
export class SimpleModalService {
    @Output() openModale: EventEmitter<string> = new EventEmitter();
    public modals: Array<SimpleModal> = [];
   
    registerModal(id: string) {
        const modal: SimpleModal = new SimpleModal();
        modal.id= id;
        modal.isOpen = false;
        this.modals.push(modal);
    }

    remove(id: string) {
        this.modals = this.modals.filter(x => x.id !== id);
    }


    getEmitter() {
        return this.openModale;
    }

    open(id: string) {
        let modal: SimpleModal = this.modals.find(x => x.id === id);
        modal.isOpen = true;
        this.openModale.emit(modal.id);
    }

    close(id: string) {
        let modal: SimpleModal = this.modals.find(x => x.id === id);
        modal.isOpen = false;
    }

}


