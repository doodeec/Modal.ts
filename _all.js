define(["require", "exports", './Modal'], function(require, exports, Modal) {
    function openModal() {
        var mod = new Modal.ModalWindow();
        mod.setMessage("This is new modal window");
        mod.addButton("OK");
        mod.open();
    }

    function openAnotherModal() {
        var mod = new Modal.ModalWindow();
        mod.setMessage("This is another modal window with two buttons");
        mod.addButton("Cancel");
        mod.addButton("OK", function () {
            alert("Modal will be closed now");
        });
        mod.open();
    }

    document.getElementById("open-modal").addEventListener("click", openModal);
    document.getElementById("open-another").addEventListener("click", openAnotherModal);
});
//# sourceMappingURL=_all.js.map
