import Block from "../../../utils/Block";
import template from "./modal.hbs";
import {ChatModalContent} from "../chatModalContent";
import {ProfileModalContent} from "../profileModalContent";
import {IFormProps} from "../../form/form";

export abstract class Modal<T extends IFormProps> extends Block<T> {
    constructor(props: T) {
        super('div', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('modal');
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }

    show():void {//sdf
    }
    hide():void {//sd
    }
}

export interface IChatModalContentProps extends IFormProps {
    title: string,
    buttonValue: string
}

export class ChatModal extends Modal<IChatModalContentProps> {
    constructor(props: IChatModalContentProps) {
        console.log(props)
        super(props);
    }
    protected init() {
        console.log(this.props)
        super.init();
        this.children.content = new ChatModalContent(this.props)
    }
}

export interface IProfileModalProps extends IFormProps {
    title: string,
    titleError?: boolean,
    fileText: string,
    hasError: boolean,
    errortext?: string,
    fileLoaded: boolean,
    inputValue?: string,
}

export class ProfileModal extends Modal<IProfileModalProps> {
    protected init() {
        super.init();

        this.children.content = new ProfileModalContent(this.props)
    }
}
