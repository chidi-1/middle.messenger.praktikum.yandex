import Block from "../../../utils/Block";
import {
    Input2,
    inputProps,
    inputType,
    isCharEmail, isContainsCapitalLetter,
    isContainsCharLogin, isContainsCharName, isContainsCharPhone, isContainsNumber, isFirsLetterСapitalized,
    isLength,
    isLengthLogin, isLengthPassword, isLengthPhone, isPlusPositionCorrect,
    iValidable
} from "../../input/input";
import template from "./formBlock.hbs";

export interface FormBlockProps {
    label: string;
    hasError?: boolean;
    errorText?: string;
    inputProps: inputProps;
}

export class FormBlock extends Block implements iValidable{
    constructor(props: FormBlockProps) {
        super('div', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('form__el');
        if(this.props.hasError){
            this.element?.classList.add('error');
        }
        this.children.input = new Input2(this.props.inputProps,this.checkValidAndRerender.bind(this));
    }

    checkValidAndRerender(){
        if((this.children.input as Input2).isValid()){
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
        if(this.props.hasError){
            this.element?.classList.add('error');
        }
        else{
            this.element?.classList.remove('error');
        }
        return this.compile(template, this.props)
    }

    isValid(): boolean {
        return (this.children.input as Input2).isValid();
    }

    validate(): void {
        (this.children.input as Input2).validate();
        this.checkValidAndRerender();
    }

    getErrorText(): string {
        return (this.children.input as Input2).getErrorText();
    }

    getName(): string {
        return (this.children.input as Input2).getName();
    }

    getValue(): string {
        return (this.children.input as Input2).getValue();
    }

    getInputSubtmiData(): Record<string, string> {
        return {key: (this.children.input as Input2).getName(), value: (this.children.input as Input2).getValue()}
    }
}

interface profileInputProps {
    disabled?: true,
    value?: string,
}

export class FormBlockEmail extends FormBlock {
    constructor(props: profileInputProps) {
        const data = {
            inputProps: {
                name: 'email',
                placeholder: 'Почта',
                type: inputType.email,
                validators: [isLength, isCharEmail],
            },
            label: 'Почта'
        }
        if(props.disabled){
            data.inputProps.disabled = true
        }
        if(props.value){
            data.inputProps.value = props.value
        }
        super(data);
    }
}

export class FormBlockLogin extends FormBlock {
    constructor(props: profileInputProps) {
        const data = {
            inputProps: {
                name: 'login',
                placeholder: 'Логин',
                type: inputType.text,
                validators: [isLength, isLengthLogin, isContainsCharLogin]
            },
            label: 'Логин'
        }
        if(props.disabled){
            data.inputProps.disabled = true
        }
        if(props.value){
            data.inputProps.value = props.value
        }
        super(data);
    }
}

export class FormBlockName extends FormBlock {
    constructor(props: profileInputProps) {
        const data = {
            inputProps: {
                name: 'first_name',
                placeholder: 'Имя',
                type: inputType.text,
                validators: [isLength, isFirsLetterСapitalized, isContainsCharName]
            },
            label: 'Имя'
        }
        if(props.disabled){
            data.inputProps.disabled = true
        }
        if(props.value){
            data.inputProps.value = props.value
        }
        super(data);
    }
}

export class FormBlockSurname extends FormBlock {
    constructor(props: profileInputProps) {
        const data = {
            inputProps: {
                name: 'second_name',
                placeholder: 'Фамилия',
                type: inputType.text,
                validators: [isLength, isFirsLetterСapitalized, isContainsCharName]
            },
            label: 'Фамилия'
        }
        if(props.disabled){
            data.inputProps.disabled = true
        }
        if(props.value){
            data.inputProps.value = props.value
        }
        super(data);
    }
}

export class FormBlockChatname extends FormBlock {
    constructor(props: profileInputProps) {
        const data = {
            inputProps: {
                name: 'second_name',
                placeholder: 'Фамилия',
                type: inputType.text,
                validators: [isLength,]
            },
            label: 'Фамилия'
        }
        if(props.disabled){
            data.inputProps.disabled = true
        }
        if(props.value){
            data.inputProps.value = props.value
        }
        super(data);
    }
}

export class FormBlockPhone extends FormBlock {
    constructor(props: profileInputProps) {
        const data = {
            inputProps: {
                name: 'phone',
                placeholder: 'Телефон',
                type: inputType.text,
                validators: [isLength, isLengthPhone, isContainsCharPhone, isPlusPositionCorrect]
            },
            label: 'Телефон'
        }
        if(props.disabled){
            data.inputProps.disabled = true
        }
        if(props.value){
            data.inputProps.value = props.value
        }
        super(data);
    }
}

export class FormBlockPassword extends FormBlock {
    constructor(props: profileInputProps) {
        const data = {
            inputProps: {
                name: 'password',
                placeholder: 'Пароль',
                type: inputType.password,
                validators: [isLength, isLengthPassword, isContainsCapitalLetter, isContainsNumber]
            },
            label: 'Пароль'
        }
        if(props.disabled){
            data.inputProps.disabled = true
        }
        if(props.value){
            data.inputProps.value = props.value
        }
        super(data);
    }
}

export class FormBlockPasswordDouble extends FormBlock {
    constructor(props: profileInputProps) {
        const data = {
            inputProps: {
                name: 'password_double',
                placeholder: 'Пароль (ещё раз)',
                type: inputType.password,
                validators: [isLength, isLengthPassword, isContainsCapitalLetter, isContainsNumber]
            },
            label: 'Пароль (ещё раз)'
        }
        if(props.disabled){
            data.inputProps.disabled = true
        }
        if(props.value){
            data.inputProps.value = props.value
        }
        super(data);
    }
}

export class FormBlockMsssage extends FormBlock {
    constructor(props: profileInputProps) {
        const data = {
            inputProps: {
                name: 'message',
                placeholder: 'Сообщение',
                type: inputType.text,
                validators: [isLength]
            },
            label: 'Сообщение'
        }
        super(data);
    }
}
