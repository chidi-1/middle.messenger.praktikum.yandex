import Block from "../../utils/Block";
import template from "./messagingModal.hbs";
import {inputType} from "../input";
import {FormSearchChat} from "../search";

interface messagingModalProps {
    title: string,
    type: inputType,
    name: string,
    inputValue: string,
    label: string,
    required: boolean,
    errortext?: string,
    buttonValue: string,
}

export class MessagingModal extends Block {
    constructor(props: messagingModalProps) {
        super('div', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('modal');

        this.children.formSearchChat = new FormSearchChat({
                type: inputType.text,
                name: 'search',
                class: 'search-input',
                label: 'Поиск',
            }
        )
    }


    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

