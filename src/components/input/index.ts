import Block from "../../utils/Block";
import template from "./input.hbs";

export enum inputType {
    text = 'text',
    email = 'email',
    password = 'password'
}

interface inputProps {
    type: inputType;
    name: string;
    class: string;
    value?: string;
    label: string;
    required?: boolean;
    errorText?: string;
}

export class Input extends Block {
    constructor(props: inputProps) {
        super('div', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('form__el');
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

