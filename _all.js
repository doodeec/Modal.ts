define(["require", "exports", './Modal'], function(require, exports, Modal) {
    function openModal() {
        var mod = new Modal.ModalWindow();
        mod.setMessage("This is new modal window");
        mod.addButton("OK", function () {
            console.log("OK clicked");
        });
        mod.open();
        //    mod.close();
    }

    openModal();
});
//# sourceMappingURL=_all.js.map
