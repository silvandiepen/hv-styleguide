import { r as registerInstance, h, g as getElement } from './core-59b611fd.js';

const InputField = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("button", { class: "hv-button" }, h("span", { class: "hv-button__text" }, this.label), this.icon ? (h("span", { class: "hv-button__icon" }, this.icon)) : (h("span", null))));
    }
    get el() { return getElement(this); }
    static get style() { return ":host{display:block}"; }
};

export { InputField as hv_button };
