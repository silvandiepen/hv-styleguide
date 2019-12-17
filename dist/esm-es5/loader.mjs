import { a as patchEsm, b as bootstrapLazy } from './core-59b611fd.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["hv-button", [[0, "hv-button", { "label": [1], "icon": [1] }]]], ["hv-input-text", [[4, "hv-input-text", { "elementId": [1, "id"], "optional": [4], "required": [4], "value": [513], "name": [1], "label": [1], "placeholder": [1], "description": [1], "dirty": [32], "errorMessage": [32], "error": [32] }]]]], options);
    });
};
export { defineCustomElements };
