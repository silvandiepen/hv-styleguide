import { h } from "@stencil/core";
export class InputField {
    render() {
        return (h("button", { class: "hv-button" },
            h("span", { class: "hv-button__text" }, this.label),
            this.icon ? (h("span", { class: "hv-button__icon" }, this.icon)) : (h("span", null))));
    }
    static get is() { return "hv-button"; }
    static get originalStyleUrls() { return {
        "$": ["button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["button.css"]
    }; }
    static get properties() { return {
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "label",
            "reflect": false
        },
        "icon": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "icon",
            "reflect": false
        }
    }; }
    static get elementRef() { return "el"; }
}
