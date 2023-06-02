import Block, {IProperties} from "../../../utils/Block";
import {
    Input,
    InputProps,
    InputType,
    isCharEmail, isContainsCapitalLetter,
    isContainsCharLogin, isContainsCharName, isContainsCharPhone, isContainsNumber, isFirsLetterСapitalized,
    isLength,
    isLengthLogin, isLengthPassword, isLengthPhone, isPlusPositionCorrect,
    IValidable
} from "../../input/input";
import template from "./formBlock.hbs";

export interface IFormBlockProps extends IProperties {
    label?: string;
    hasError?: boolean;
    errorText?: string;
    inputProps?: InputProps;
}

export class FormBlock<T extends IFormBlockProps> extends Block<T> implements IValidable {
    constructor(props: T) {
        super('div', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('form__el');
        if (this.props.hasError) {
            this.element?.classList.add('error');
        }
        this.children.input = new Input(this.props.inputProps!, this.checkValidAndRerender.bind(this));
    }

    checkValidAndRerender() {
        if ((this.children.input as Input).isValid()) {
            this.props.hasError = false;
        } else {
            this.props.hasError = true;
            this.props.errorText = this.getErrorText();
        }
    }

    protected render(): DocumentFragment {
        if (this.props.hasError) {
            this.element?.classList.add('error');
        } else {
            this.element?.classList.remove('error');
        }
        return this.compile(template, this.props)
    }

    isValid(): boolean {
        return (this.children.input as Input).isValid();
    }

    validate(): void {
        (this.children.input as Input).validate();
        this.checkValidAndRerender();
    }

    getErrorText(): string {
        return (this.children.input as Input).getErrorText();
    }

    getName(): string {
        return (this.children.input as Input).getName();
    }

    getValue(): string {
        return (this.children.input as Input).getValue();
    }

    getInputSubtmiData(): Record<string, string> {
        return {key: (this.children.input as Input).getName(), value: (this.children.input as Input).getValue()}
    }
}

export interface IProfileInputProps extends IFormBlockProps {
    disabled?: boolean,
    value?: string,
}

export class FormBlockEmail extends FormBlock<IProfileInputProps> {
    constructor(props: IProfileInputProps) {
        const data = {
            inputProps: {
                disabled: false,
                value: '',
                name: 'email',
                placeholder: 'Почта',
                type: InputType.email,
                validators: [isLength, isCharEmail],
            },
            label: 'Почта'
        }
        if (props.disabled) {
            data.inputProps.disabled = true
        }
        if (props.value) {
            data.inputProps.value = props.value
        }
        super(data);
    }
}

export class FormBlockLogin extends FormBlock<IProfileInputProps> {
    constructor(props: IProfileInputProps) {
        const data = {
            inputProps: {
                disabled: false,
                value: '',
                name: 'login',
                placeholder: 'Логин',
                type: InputType.text,
                validators: [isLength, isLengthLogin, isContainsCharLogin]
            },
            label: 'Логин'
        }
        if (props.disabled) {
            data.inputProps.disabled = true
        }
        if (props.value) {
            data.inputProps.value = props.value
        }
        super(data);
    }
}

export class FormBlockCreateChat extends FormBlock<IFormBlockProps> {
    constructor(props: IFormBlockProps) {
        const data = {
                inputProps: {
                disabled: false,
                value: '',
                name: 'title',
                placeholder: 'Название чата',
                type: InputType.text,
                validators: [isLength]
            },
            label: 'Название чата'
        }
        super(data);
    }
}

export class FormBlockName extends FormBlock<IProfileInputProps> {
    constructor(props: IProfileInputProps) {
        const data = {
            inputProps: {
                disabled: false,
                value: '',
                name: 'first_name',
                placeholder: 'Имя',
                type: InputType.text,
                validators: [isLength, isFirsLetterСapitalized, isContainsCharName]
            },
            label: 'Имя'
        }
        if (props.disabled) {
            data.inputProps.disabled = true
        }
        if (props.value) {
            data.inputProps.value = props.value
        }
        super(data);
    }
}

export class FormBlockSurname extends FormBlock<IProfileInputProps> {
    constructor(props: IProfileInputProps) {
        const data = {
            inputProps: {
                disabled: false,
                value: '',
                name: 'second_name',
                placeholder: 'Фамилия',
                type: InputType.text,
                validators: [isLength, isFirsLetterСapitalized, isContainsCharName]
            },
            label: 'Фамилия'
        }
        if (props.disabled) {
            data.inputProps.disabled = true
        }
        if (props.value) {
            data.inputProps.value = props.value
        }
        super(data);
    }
}

export class FormBlockChatname extends FormBlock<IProfileInputProps> {
    constructor(props: IProfileInputProps) {
        const data = {
            inputProps: {
                disabled: false,
                value: '',
                name: 'second_name',
                placeholder: 'Фамилия',
                type: InputType.text,
                validators: [isLength,]
            },
            label: 'Фамилия'
        }
        if (props.disabled) {
            data.inputProps.disabled = true
        }
        if (props.value) {
            data.inputProps.value = props.value
        }
        super(data);
    }
}

export class FormBlockPhone extends FormBlock<IProfileInputProps> {
    constructor(props: IProfileInputProps) {
        const data = {
            inputProps: {
                disabled: false,
                value: '',
                name: 'phone',
                placeholder: 'Телефон',
                type: InputType.text,
                validators: [isLength, isLengthPhone, isContainsCharPhone, isPlusPositionCorrect]
            },
            label: 'Телефон'
        }
        if (props.disabled) {
            data.inputProps.disabled = true
        }
        if (props.value) {
            data.inputProps.value = props.value
        }
        super(data);
    }
}

export class FormBlockPassword extends FormBlock<IProfileInputProps> {
    constructor(props: IProfileInputProps) {
        const data = {
            inputProps: {
                disabled: false,
                value: '',
                name: 'password',
                placeholder: 'Пароль',
                type: InputType.password,
                validators: [isLength, isLengthPassword, isContainsCapitalLetter, isContainsNumber]
            },
            label: 'Пароль'
        }
        if (props.disabled) {
            data.inputProps.disabled = true
        }
        if (props.value) {
            data.inputProps.value = props.value
        }
        super(data);
    }
}

export class FormBlockPasswordDouble extends FormBlock<IProfileInputProps> {
    constructor(props: IProfileInputProps) {
        const data = {
            inputProps: {
                disabled: false,
                value: '',
                name: 'password_double',
                placeholder: 'Пароль (ещё раз)',
                type: InputType.password,
                validators: [isLength, isLengthPassword, isContainsCapitalLetter, isContainsNumber]
            },
            label: 'Пароль (ещё раз)'
        }
        if (props.disabled) {
            data.inputProps.disabled = true
        }
        if (props.value) {
            data.inputProps.value = props.value
        }
        super(data);
    }
}

export class FormBlockMsssage extends FormBlock<IProfileInputProps> {
    constructor(props: IProfileInputProps) {
        const data = {
            inputProps: {
                name: 'message',
                placeholder: 'Сообщение',
                type: InputType.text,
                validators: [isLength]
            },
            label: 'Сообщение'
        }
        super(data);
    }
}
