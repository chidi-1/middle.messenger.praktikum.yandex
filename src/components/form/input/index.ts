import Block from "../../../utils/Block";

export interface iValidable {
    validate(): void;
    isValid(): boolean;
    getErrorText(): string;
}

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

type validator = (value: string) => string;

function isXacce (value:string){
    if(value.length < 3){
        return 'Короткий текст'
    }
    if(value !== 'xacce') {
        return 'Не xacce'
    }
}

export abstract class Input extends Block implements iValidable{
    onChanged?: () => void;
    errorText = '';

    constructor(props: inputProps, onChanged?: () => void) {
        const defaultProps = {'events': {
            'focus': () => {
                this.validate();
            },
            'blur': () => {
                this.onChange();
            },
            'keyup': () => {
                this.props.value = ((this.element) as HTMLInputElement).value;
            }
        }}

        super('input', {...props,...defaultProps});
        this.onChanged = onChanged;
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

    onChange(): void {
        this.validate();
        if(this.onChanged){
            this.onChanged();
        }
    }

    getValue(): string {
        return this.props.value;
    }

    isValid(): boolean {
        return this.props.isValid;
    }

    validate() {
        for (const validator of this.props.validators) {
            const validateResult = validator(this.props.value);

            if(validateResult !== undefined){
                this.props.isValid = false;
                this.errorText = validateResult;
                return false;
            }
        }
        this.props.isValid = true;
    }

    getErrorText(): string {
        return this.errorText;
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
    constructor(props: inputProps, onChanged?: () => void) {
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

