import Modal = require('./Modal');

function openModal() {
    var mod = new Modal.ModalWindow();
    mod.setMessage("This is new modal window");
    mod.addButton("OK");
    mod.open();
//    mod.close();
}

openModal();