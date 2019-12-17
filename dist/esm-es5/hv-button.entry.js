import { r as registerInstance, h, g as getElement } from './core-59b611fd.js';
var InputField = /** @class */ (function () {
    function InputField(hostRef) {
        registerInstance(this, hostRef);
    }
    InputField.prototype.render = function () {
        return (h("button", { class: "hv-button" }, h("span", { class: "hv-button__text" }, this.label), this.icon ? (h("span", { class: "hv-button__icon" }, this.icon)) : (h("span", null))));
    };
    Object.defineProperty(InputField.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputField, "style", {
        get: function () { return ":host{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return InputField;
}());
export { InputField as hv_button };
