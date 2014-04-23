define(["require", "exports"], function(require, exports) {
    var ModalWindow = (function () {
        function ModalWindow(message) {
            this.message = message;
            this.opened = false;
        }
        ModalWindow.prototype.open = function () {
            this.opened = true;
            console.log(this.message);
        };
        return ModalWindow;
    })();
    exports.ModalWindow = ModalWindow;
});
//# sourceMappingURL=Modal.js.map
