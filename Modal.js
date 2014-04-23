define(["require", "exports"], function(require, exports) {
    var ModalWindow = (function () {
        function ModalWindow() {
            this.opened = false;
        }
        ModalWindow.prototype.close = function () {
            this.opened = false;
            console.log("Modal closed");
            return this;
        };

        ModalWindow.prototype.open = function () {
            this.opened = true;
            console.log("Modal opened", this.message);
            return this;
        };

        ModalWindow.prototype.setMessage = function (message) {
            this.message = message;
            return this;
        };
        return ModalWindow;
    })();
    exports.ModalWindow = ModalWindow;
});
//# sourceMappingURL=Modal.js.map
