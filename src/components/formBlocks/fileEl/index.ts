import Block from "../../../utils/Block";
import {Input2} from "../../input/input";
import template from "./startFormEl.hbs";

export interface FileFormElProps {
    fileLoaded: boolean,
    text: string,
    inputType: Input2
}

export class FileFormEl extends Block {
    constructor(props: FileFormElProps) {
        super('div', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('form__el');
        this.children.input = this.props.inputType;
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

