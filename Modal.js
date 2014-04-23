var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function(require, exports) {
    var ModalActions = (function () {
        function ModalActions() {
        }
        ModalActions.prototype.close = function () {
            this.opened = false;
            console.log("Modal closed");
        };
        return ModalActions;
    })();
    exports.ModalActions = ModalActions;

    var ModalWindow = (function (_super) {
        __extends(ModalWindow, _super);
        function ModalWindow(message) {
            _super.call(this);
            this.message = message;
            this.opened = false;
        }
        ModalWindow.prototype.open = function () {
            this.opened = true;
            console.log("Modal opened", this.message);
        };
        return ModalWindow;
    })(ModalActions);
    exports.ModalWindow = ModalWindow;
});
//# sourceMappingURL=Modal.js.map
