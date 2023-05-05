import Block from "../../../utils/Block";
import template from "./search.hbs";
import {inputProps, InputText} from "../input";

export class FormSearchChat extends Block {
    constructor(props: inputProps) {
        super('form', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('search-form');

        this.children.input = new InputText({
            name: "search",
            placeholder: "Поиск",
            required: true
        })
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

