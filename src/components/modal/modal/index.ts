import Block from "../../../utils/Block";
import template from "./modal.hbs";
import {ChatModalContent} from "../chatModalContent";
import {ProfileModalContent, profileModalProps} from "../profileModalContent";

export abstract class Modal extends Block {
    constructor(props: chatModalContentProps) {
        super('div', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('modal');
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }

    show():void {}
    hide():void {}
}

interface chatModalContentProps {
}

export class ChatModal extends Modal {
    constructor(props: chatModalContentProps) {
        super(props);
    }

    protected init() {
        super.init();

        this.children.content = new ChatModalContent({
            title: this.props.title,
            formAction: this.props.formAction,
            formMethod: this.props.formMethod,
            hasError: this.props.hasError,
            inputValue: this.props.inputValue,
            label: this.props.label,
            buttonValue: this.props.buttonValue,
        })
    }
}

export class ProfileModal extends Modal {
    constructor(props: profileModalProps) {
        super(props);
    }

    protected init() {
        super.init();

        this.children.content = new ProfileModalContent({
            title: this.props.title,
            titleError: this.props.titleError,
            fileText: this.props.fileText,
            hasError: this.props.hasError,
            errortext: this.props.errortext,
            fileLoaded: this.props.fileLoaded,
            inputValue: this.props.inputValue,
            formAction: this.props.formAction,
            formMethod: this.props.formMethod,
        })
    }
}