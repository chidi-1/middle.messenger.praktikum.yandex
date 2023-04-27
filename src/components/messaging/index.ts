import Block from "../../utils/Block";
import template from "./messaging.hbs";

export class Messaging extends Block {
    constructor() {
        super('div', {});
    }

    protected init() {
        super.init();
        this.element?.classList.add('chat__content');
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

