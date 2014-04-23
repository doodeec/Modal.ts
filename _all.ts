/// <reference path="Modal.ts" />

import Modal = require('./Modal');

function openModal() {
    var mod = new Modal.ModalWindow();
    mod.open();
    mod.setMessage("This is new modal window");
    mod.open();
    mod.close();
}

openModal();