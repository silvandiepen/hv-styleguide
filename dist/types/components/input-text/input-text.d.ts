import { EventEmitter } from "../../stencil.core";
export declare class InputField {
    el: HTMLElement;
    elementId: string;
    optional: boolean;
    required: boolean;
    value: string;
    name: string;
    label: string;
    placeholder: string;
    description: string;
    bindValue: EventEmitter;
    dirty: boolean;
    errorMessage: string;
    error: boolean;
    valueChanged(): void;
    inputChanged(event: any): void;
    handleBlur(event: any): void;
    render(): any;
}
