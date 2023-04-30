import Block from "../../utils/Block";
import template from "./message.hbs";
import {dropdownMenuProps} from "../messagingHeader";

export class FormMessage extends Block {
    constructor(props: dropdownMenuProps) {
        super('form', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('chat__footer');
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

