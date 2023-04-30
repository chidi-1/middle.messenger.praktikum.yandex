import Block from "../../../utils/Block";
import {Input} from "../input";
import template from "./startFormEl.hbs";

export interface StartFormElProps {
    label: string;
    hasError?: boolean;
    errorText?: string;
    inputType: Input;
}

export class StartFormEl extends Block {
    constructor(props: StartFormElProps) {
        super('div', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('form__el');
        if(this.props.hasError){
            this.element?.classList.add('error');
        }
        this.children.input = this.props.inputType;
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

