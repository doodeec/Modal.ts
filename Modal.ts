export class ModalWindow {
    opened:boolean;

    constructor(public message:string) {
        this.opened = false;
    }

    open() {
        this.opened = true;
        console.log(this.message);
    }
}