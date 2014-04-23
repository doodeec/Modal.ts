define(["require", "exports"], function(require, exports) {
    var ModalElement = (function () {
        function ModalElement() {
            this.header = document.createElement("div");
            this.body = document.createElement("div");
            this.footer = document.createElement("div");
            this.buttons = [];
        }
        ModalElement.prototype.addBtn = function (btnText) {
            var newButton = document.createElement("button");
            newButton.innerHTML = btnText;
            this.buttons.push(newButton);
            return this;
        };
        return ModalElement;
    })();
    exports.ModalElement = ModalElement;

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
            if (typeof this.message == 'undefined')
                return this;
            this.opened = true;
            console.log("Modal opened", this.message);
            return this;
        };

        ModalWindow.prototype.setMessage = function (message) {
            this.message = message;
            return this;
        };

        ModalWindow.prototype.addButton = function (btnMessage) {
            this.modalElement.addBtn(btnMessage);
            return this;
        };

        ModalWindow.prototype.createElement = function () {
            this.modalElement = new ModalElement();
            return true;
        };
        return ModalWindow;
    })();
    exports.ModalWindow = ModalWindow;
});
//# sourceMappingURL=Modal.js.map
