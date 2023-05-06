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
    validators?: Array<validator>;
}

type validator = (value: string) => boolean;

function isXacce (value:string){
    return (value === 'xacce');
}

export abstract class Input extends Block {
    constructor(props: inputProps, onChanged?: (value:string) => void) {
        let defaultProps = {'events': {
            'focus': () => {
                this.validate();
            },
            'keyup': () => {
                this.props.value = ((this.element) as HTMLInputElement).value;
                if(onChanged){
                    onChanged(this.props.value);
                }
            }
        }}
        super('input', {...props,...defaultProps});
    }

    protected init() {
        super.init();
        this.element?.classList.add('input');
        // сделать через  белый список
        this.setAttributes('name', this.props.name);
        this.setAttributes('value', this.props.value);
        this.setAttributes('required', this.props.required);
        this.setAttributes('disabled', this.props.disabled);
        this.setAttributes('placeholder', this.props.placeholder);
    }

   /* protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }*/

    getValue(): string {
        return this.props.value;
    }

    isValid(): boolean {
        return this.props.isValid;
    }

    validate() {
        for (const validator of this.props.validators) {
            if(!validator(this.props.value)){
                console.log('bad')
                this.props.isValid = false;
                return false;
            }
        }
        console.log('good')
        this.props.isValid = true;
    }

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
}

export class InputLogin extends Input {
    constructor(props: inputProps, onChanged?: (value:string) => void) {
        if(!props.validators){
            props.validators = [isXacce];
        }
        else{
            props.validators.push(isXacce)
        }
        super(props, onChanged);
    }

    protected init() {
        super.init();
        this.setAttributes('type', inputType.text);
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

