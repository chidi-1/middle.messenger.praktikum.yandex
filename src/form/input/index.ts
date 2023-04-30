import Block from "../../../utils/Block";
import template from "./input.hbs";

export enum inputType {
    text = 'text',
    email = 'email',
    password = 'password',
    file = 'file',
}

export interface inputProps {
    name: string;
    value?: string;
    required?: boolean;
    placeholder?: string;
    disabled?: boolean;
}

export abstract class Input extends Block {
    constructor(props: inputProps) {
        super('input', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('input');
        this.setAttributes('name', this.props.name);
        this.setAttributes('value', this.props.value);
        this.setAttributes('required', this.props.required);
        this.setAttributes('disabled', this.props.disabled);
        this.setAttributes('placeholder', this.props.placeholder);
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }

    abstract validate(): boolean;

    setAttributes(name: string, value: string):void {
        if(value){
            this.element?.setAttribute(name, value);
        }
    }
}

export class InputText extends Input {
    constructor(props: inputProps) {
        super(props);
    }

    protected init() {
        super.init();
        this.setAttributes('type', inputType.text);
    }

    validate(){
        return true;
    }
}

export class InputEmail extends Input {
    constructor(props: inputProps) {
        super(props);
    }

    protected init() {
        super.init();
        this.setAttributes('type', inputType.email);
    }

    validate(){
        return true;
    }
}

export class InputPhone extends Input {
    constructor(props: inputProps) {
        super(props);
    }

    protected init() {
        super.init();
        this.setAttributes('type', inputType.text);
    }

    validate(){
        return true;
    }
}

export class InputPassword extends Input {
    constructor(props: inputProps) {
        super(props);
    }

    protected init() {
        super.init();
        this.setAttributes('type', inputType.password);
    }

    validate(){
        return true;
    }
}

export class InputFile extends Input {
    constructor(props: inputProps) {
        super(props);
    }

    protected init() {
        super.init();
        this.setAttributes('type', inputType.file);
    }

    validate(){
        return true;
    }
}

