import Block from "../../../utils/Block";
import {Input} from "../input";
import template from "./profileEl.hbs";

export interface profileFormElProps {
    label: string;
    input: Input;
}

export class ProfileFormEl extends Block {
    constructor(props: profileFormElProps) {
        super('li', props);
    }

    protected init() {
        super.init();
        this.children.input = this.props.input;
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

