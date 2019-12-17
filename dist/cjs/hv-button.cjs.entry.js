'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-b512de12.js');

const InputField = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h("button", { class: "hv-button" }, core.h("span", { class: "hv-button__text" }, this.label), this.icon ? (core.h("span", { class: "hv-button__icon" }, this.icon)) : (core.h("span", null))));
    }
    get el() { return core.getElement(this); }
    static get style() { return ":host{display:block}"; }
};

exports.hv_button = InputField;
