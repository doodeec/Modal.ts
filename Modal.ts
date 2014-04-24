export interface IModalElement {
    header: HTMLDivElement;
    body: HTMLDivElement;
    footer: HTMLDivElement;
    buttons: HTMLButtonElement[];
    addBtn(string): HTMLButtonElement;
    setMessage(string): void;
    getElement(): HTMLDivElement;
}

export class ModalElement implements IModalElement {
    header:HTMLDivElement;
    body:HTMLDivElement;
    footer:HTMLDivElement;
    buttons:HTMLButtonElement[];

    constructor() {
        this.header = document.createElement("div");
        this.body = document.createElement("div");
        this.footer = document.createElement("div");
        this.buttons = [];
    }

    addBtn(btnText:string) {
        var newButton = document.createElement("button");
        newButton.innerHTML = btnText;
        this.buttons.push(newButton);
        this.footer.appendChild(newButton);
        return newButton;
    }

    setMessage(msg:string) {
        this.body.innerHTML = msg;
    }

    getElement() {
        var modalEl = document.createElement("div");
        if (this.header.innerHTML) {
            modalEl.appendChild(this.header);
        }
        modalEl.appendChild(this.body);
        modalEl.appendChild(this.footer);
        return modalEl;
    }
}

export interface IModalWindow {
    opened: boolean;
    message: string;
    modalElement: ModalElement;
    open(): IModalWindow;
    close(): IModalWindow;
    setMessage(string): IModalWindow;
    addButton(string, Function): IModalWindow;
    createElement(): boolean;
}

export class ModalWindow implements IModalWindow {
    opened:boolean;
    message:string;
    modalElement:ModalElement;

    constructor() {
        this.opened = false;
        this.createElement();
    }

    close() {
        this.opened = false;
        console.log("Modal closed");
        return this;
    }

    open() {
        if (typeof this.message == 'undefined') return this;
        document.body.appendChild(this.modalElement.getElement());
        this.opened = true;
        console.log("Modal opened", this.message);
        return this;
    }

    setMessage(message:string) {
        this.message = message;
        this.modalElement.setMessage(message);
        return this;
    }

    addButton(btnMessage:string, action:Function = this.close) {
        var button = this.modalElement.addBtn(btnMessage);
        button.addEventListener('click', function() {
            action();
        });
        return this;
    }

    createElement() {
        this.modalElement = new ModalElement();
        return true;
    }
}