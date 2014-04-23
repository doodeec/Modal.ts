var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function(require, exports) {
    var ModalActions = (function () {
        function ModalActions(message) {
            this.message = message;
        }
        ModalActions.prototype.close = function () {
            this.opened = false;
            console.log("Modal closed");
            return this;
        };

        ModalActions.prototype.open = function () {
            this.opened = true;
            console.log("Modal opened", this.message);
            return this;
        };
        return ModalActions;
    })();
    exports.ModalActions = ModalActions;

    var ModalWindow = (function (_super) {
        __extends(ModalWindow, _super);
        function ModalWindow(message) {
            _super.call(this, message);
            this.opened = false;
        }
        return ModalWindow;
    })(ModalActions);
    exports.ModalWindow = ModalWindow;
});
//# sourceMappingURL=Modal.js.map
