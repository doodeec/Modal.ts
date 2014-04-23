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
            this.footer.appendChild(newButton);
        };

        ModalElement.prototype.setMessage = function (msg) {
            this.body.innerHTML = msg;
        };

        ModalElement.prototype.getElement = function () {
            var modalEl = document.createElement("div");
            modalEl.appendChild(this.header);
            modalEl.appendChild(this.body);
            modalEl.appendChild(this.footer);
            return modalEl;
        };
        return ModalElement;
    })();
    exports.ModalElement = ModalElement;

    var ModalWindow = (function () {
        function ModalWindow() {
            this.opened = false;
            this.createElement();
        }
        ModalWindow.prototype.close = function () {
            this.opened = false;
            console.log("Modal closed");
            return this;
        };

        ModalWindow.prototype.open = function () {
            if (typeof this.message == 'undefined')
                return this;
            document.body.appendChild(this.modalElement.getElement());
            this.opened = true;
            console.log("Modal opened", this.message);
            return this;
        };

        ModalWindow.prototype.setMessage = function (message) {
            this.message = message;
            this.modalElement.setMessage(message);
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
