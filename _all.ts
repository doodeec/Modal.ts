/// <reference path="Modal.ts" />

import Modal = require('./Modal');

function openModal() {
    var mod = new Modal.ModalWindow("This is new modal window");
    mod.open();
}

openModal();