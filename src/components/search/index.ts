import Block from "../../utils/Block";
import template from "./search.hbs";

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

export class FormSearchChat extends Block {
    constructor(props: inputProps) {
        super('form', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('search-form');
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

