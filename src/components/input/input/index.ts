import Block, {IProperties} from "../../../utils/Block";

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

export interface inputProps extends IProperties {
    name: string;
    value?: string;
    required?: boolean;
    placeholder?: string;
    disabled?: boolean;
    type?: inputType;
    validators?: Array<validator>;
}

export type validator = (value: string) => string | undefined;

// валидаторы

export function isLength(value: string) {
    if (value == undefined || value.length < 1) {
        return 'Введите значение'
    }
}
export function isLengthPassword(value: string) {
    if (value.length < 8 || value.length > 40) {
        return 'Длина должна быть от 8 до 40 символов'
    }
}
export function isLengthLogin(value: string) {
    if (value.length < 3 || value.length > 20) {
        return 'Длина должна быть от 3 до 20 символов'
    }
}
export function isLengthPhone(value: string) {
    if (value.length < 10 || value.length > 15) {
        return 'Длина должна быть от 10 до 15 символов'
    }
}

export function isContainsCharName(value: string) {
    if (!(/^[A-ZА-ЯЁ-]+$/i.test(value))) {
        return 'Содержит недопустимые символы'
    }
}
export function isContainsCharLogin(value: string) {
    if (!(/^[A-Z0-9-_]+$/i.test(value))) {
        return 'Содержит недопустимые символы'
    }
}
export function isContainsCharPhone(value: string) {
    if (!(/^[0-9+]+$/i.test(value))) {
        return 'Содержит недопустимые символы'
    }
}

export function isPlusPositionCorrect(value: string){
    if(value.includes('+') && (value.indexOf('+')) != 0){
        return 'Плюс может быть только первым символом'
    }
}

export function isContainsLetter(value: string) {
    if (value.match(/[A-z]/g) == null){
        return 'Хотя бы одна буква'
    }
}

export function isFirsLetterСapitalized(value: string) {
    if (value[0] == value[0].toLocaleLowerCase()) {
        return 'Первая буква должна быть заглавной'
    }
}

export function isContainsCapitalLetter(value: string) {
    if (!hasCapital(value)) {
        return 'Хотя бы одна заглавная'
    }
}
const hasCapital = (s:string) => !(s === s.toLowerCase());

export function isContainsNumber(value: string) {
    if (!/[0-9]/.test(value)) {
        return 'Хотя бы одна цифра'
    }
}

export function isCharEmail(value: string) {
    if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z]+\.[a-zA-Z0-9-.]+$/.test(value)) {
        return 'Неправильный формат'
    }
}

export class Input extends Block<inputProps> implements iValidable {
    onChanged?: () => void;
    errorText = '';

    constructor(props: inputProps, onChanged?: () => void) {
        const defaultProps = {
            'events': {
                'focus': () => {
                    this.validate();
                },
                'blur': () => {
                    this.onChange();
                },
                'keyup': () => {
                    this.props.value = ((this.element) as HTMLInputElement).value;
                }
            }
        }
        super('input', {...props, ...defaultProps});
        this.onChanged = onChanged;
    }

    protected init() {
        super.init();
        this.element?.classList.add('input');
        // сделать через  белый список
        this.setAttributes('type', this.props.type!);
        this.setAttributes('name', this.props.name);
        this.setAttributes('value', this.props.value!);
        this.setAttributes('required', this.props.required);
        this.setAttributes('disabled', this.props.disabled);
        this.setAttributes('placeholder', this.props.placeholder!);
    }

    onChange(): void {
        this.validate();
        if (this.onChanged) {
            this.onChanged();
        }
    }

    getValue(): string {
        return this.props.value!;
    }

    getName(): string {
        return this.props.name;
    }

    isValid(): boolean {
        return this.props.isValid;
    }

    validate() {
        for (const validator of this.props.validators!) {
            const validateResult = validator(this.props.value!);

            if (validateResult !== undefined) {
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

    setAttributes(name: string, value: string): void {
        if (value) {
            this.element?.setAttribute(name, value);
        }
    }
}
