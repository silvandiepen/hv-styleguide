import { Component, Element, h, Prop } from "@stencil/core";

@Component({
  tag: "hv-button",
  styleUrl: "button.scss"
})
export class InputField {
  @Element() el: HTMLElement;

  @Prop() label: string;
  @Prop() icon: string;

  render() {
    return (
      <button class="hv-button">
        <span class="hv-button__text">{this.label}</span>
        {this.icon ? (
          <span class="hv-button__icon">{this.icon}</span>
        ) : (
          <span></span>
        )}
      </button>
    );
  }
}
