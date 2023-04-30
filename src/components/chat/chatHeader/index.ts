import Block from "../../../utils/Block";
import template from "./chatHeader.hbs";

export interface dropdownMenuProps {
    showMenu: boolean;
}

export class ChatHeader extends Block {
    constructor(props: dropdownMenuProps) {
        super('div', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('chat__header');
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

