import Block from "../../../utils/Block";
import {Input, InputLogin, iValidable} from "../input";
import template from "./startFormEl.hbs";

export interface StartFormElProps {
    label: string;
    hasError?: boolean;
    errorText?: string;
    input: Input;
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
        this.children.input = this.props.input;
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

export class StartFormEl2 extends Block implements iValidable{
    constructor(props: StartFormElProps) {
        super('div', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('form__el');
        if(this.props.hasError){
            this.element?.classList.add('error');
        }
        console.log(this.malevich)
        console.log('2')
        this.children.input = new InputLogin({
            disabled: false,
            name: "login",
            placeholder: "Логин",
            required: false,
            validators: undefined,
            value: ""
        },this.malevich.bind(this));
    }

    malevich(){
        if((this.children.input as Input).isValid()){
            this.props.hasError = false;
        }
        else{
            this.setProps({
                hasError: true,
                errorText: this.getErrorText(),
            })
        }
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }

    isValid(): boolean {
        return (this.children.input as Input).isValid();
    }

    validate(): void {
        (this.children.input as Input).validate();
        this.malevich();
    }

    getErrorText(): string {
        return (this.children.input as Input).getErrorText();
    }
}

