export interface IModalActions {
    opened: boolean;
    message: string;
    open(): IModalActions;
    close(): IModalActions;
    setMessage(string): IModalActions;
}

export class ModalWindow implements IModalActions {
    opened: boolean;
    message: string;

    constructor() {
        this.opened = false;
    }

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

    setMessage(message: string) {
        this.message = message;
        return this;
    }
}