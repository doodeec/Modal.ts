export interface IModalElement {
    header: HTMLDivElement;
    body: HTMLDivElement;
    footer: HTMLDivElement;
    buttons: HTMLButtonElement[];
    addBtn(string): IModalElement;
}
export class ModalElement implements IModalElement {
    header: HTMLDivElement;
    body: HTMLDivElement;
    footer: HTMLDivElement;
    buttons: HTMLButtonElement[];

    constructor() {
        this.header = document.createElement("div");
        this.body = document.createElement("div");
        this.footer = document.createElement("div");
        this.buttons = [];
    }

    addBtn(btnText: string) {
        var newButton = document.createElement("button");
        newButton.innerHTML = btnText;
        this.buttons.push(newButton);
        return this;
    }
}

export interface IModalWindow {
    opened: boolean;
    message: string;
    modalElement: ModalElement;
    open(): IModalWindow;
    close(): IModalWindow;
    setMessage(string): IModalWindow;
    addButton(string): IModalWindow;
    createElement(): boolean;
}

export class ModalWindow implements IModalWindow {
    opened: boolean;
    message: string;
    modalElement: ModalElement;

    constructor() {
        this.opened = false;
    }

    close() {
        this.opened = false;
        console.log("Modal closed");
        return this;
    }

    open() {
        if (typeof this.message == 'undefined') return this;
        this.opened = true;
        console.log("Modal opened", this.message);
        return this;
    }

    setMessage(message: string) {
        this.message = message;
        return this;
    }

    addButton(btnMessage: string) {
        this.modalElement.addBtn(btnMessage);
        return this;
    }

    createElement() {
        this.modalElement = new ModalElement();
        return true;
    }
}