/// <reference path="Modal.ts" />
define(["require", "exports", './Modal'], function(require, exports, Modal) {
    function openModal() {
        var mod = new Modal.ModalWindow("This is new modal window");
        mod.open();
    }

    openModal();
});
//# sourceMappingURL=_all.js.map
