import Block from "../../../utils/Block";
import {Input} from "../input";
import template from "./profileEl.hbs";

export interface profileFormElProps {
    label: string;
    inputType: Input;
}

export class ProfileFormEl extends Block {
    constructor(props: profileFormElProps) {
        super('li', props);
    }

    protected init() {
        super.init();
        this.children.input = this.props.inputType;
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

