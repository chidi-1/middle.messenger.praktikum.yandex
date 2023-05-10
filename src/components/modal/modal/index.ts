import Block from "../../../utils/Block";
import template from "./modal.hbs";
import {ChatModalContent} from "../chatModalContent";
import {ProfileModalContent, profileModalProps} from "../profileModalContent";
import {formProps} from "../../form/form";

export abstract class Modal extends Block {
    constructor(props: chatModalContentProps|profileModalProps) {
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

export interface chatModalContentProps {
    formProps: formProps,
    title: string,
    buttonValue: string
}

export class ChatModal extends Modal {
    constructor(props: chatModalContentProps) {
        super(props);
    }

    protected init() {
        super.init();

        this.children.content = new ChatModalContent(this.props)
    }
}

export class ProfileModal extends Modal {
    constructor(props: profileModalProps) {
        super(props);
    }

    protected init() {
        super.init();

        this.children.content = new ProfileModalContent(this.props)
    }
}
