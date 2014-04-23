/// <reference path="Modal.ts" />
define(["require", "exports", './Modal'], function(require, exports, Modal) {
    function openModal() {
        var mod = new Modal.ModalWindow();
        mod.open();
        mod.setMessage("This is new modal window");
        mod.open();
        mod.close();
    }

    openModal();
});
//# sourceMappingURL=_all.js.map
