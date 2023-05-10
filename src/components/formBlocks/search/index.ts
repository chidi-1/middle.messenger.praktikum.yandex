import Block from "../../../utils/Block";
import template from "./search.hbs";
import {Input2, inputProps, inputType} from "../../input/input";

export class FormSearchChat extends Block {
    constructor(props: inputProps) {
        super('form', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('search-form');

        this.children.input = new Input2({
            disabled: false,
            type: inputType.text,
            validators: [],
            name: "search",
            placeholder: "Поиск",
            required: true
        })
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

