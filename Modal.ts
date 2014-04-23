export interface IModalActions {
    opened: boolean;
    message: string;
    open(): IModalActions;
    close(): IModalActions;
}

export class ModalActions implements IModalActions {
    opened: boolean;

    constructor(public message: string) {}

    close() {
        this.opened = false;
        console.log("Modal closed");
        return this;
    }

    open() {
        this.opened = true;
        console.log("Modal opened", this.message);
        return this;
    }
}

export class ModalWindow extends ModalActions {
    constructor(message:string) {
        super(message);
        this.opened = false;
    }
}