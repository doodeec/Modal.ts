export class ModalActions {
    opened:boolean;

    close() {
        this.opened = false;
        console.log("Modal closed");
    }
}

export class ModalWindow extends ModalActions {
    constructor(public message:string) {
        super();
        this.opened = false;
    }

    open() {
        this.opened = true;
        console.log("Modal opened", this.message);
    }
}