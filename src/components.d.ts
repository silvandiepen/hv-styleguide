/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface HvButton {
    'icon': string;
    'label': string;
  }
  interface HvInputText {
    'description': string;
    'elementId': string;
    'label': string;
    'name': string;
    'optional': boolean;
    'placeholder': string;
    'required': boolean;
    'value': string;
  }
}

declare global {


  interface HTMLHvButtonElement extends Components.HvButton, HTMLStencilElement {}
  var HTMLHvButtonElement: {
    prototype: HTMLHvButtonElement;
    new (): HTMLHvButtonElement;
  };

  interface HTMLHvInputTextElement extends Components.HvInputText, HTMLStencilElement {}
  var HTMLHvInputTextElement: {
    prototype: HTMLHvInputTextElement;
    new (): HTMLHvInputTextElement;
  };
  interface HTMLElementTagNameMap {
    'hv-button': HTMLHvButtonElement;
    'hv-input-text': HTMLHvInputTextElement;
  }
}

declare namespace LocalJSX {
  interface HvButton {
    'icon'?: string;
    'label'?: string;
  }
  interface HvInputText {
    'description'?: string;
    'elementId': string;
    'label'?: string;
    'name': string;
    'onBindValue'?: (event: CustomEvent<any>) => void;
    'optional'?: boolean;
    'placeholder'?: string;
    'required'?: boolean;
    'value'?: string;
  }

  interface IntrinsicElements {
    'hv-button': HvButton;
    'hv-input-text': HvInputText;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'hv-button': LocalJSX.HvButton & JSXBase.HTMLAttributes<HTMLHvButtonElement>;
      'hv-input-text': LocalJSX.HvInputText & JSXBase.HTMLAttributes<HTMLHvInputTextElement>;
    }
  }
}


