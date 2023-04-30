import Block from "../../utils/Block";
import template from "./profileFormEl.hbs";
import {inputType} from "../input";

interface ProfileFormElProps {
    label: string,
    type: inputType,
    name: string,
    value: string,
    disabled: boolean
}

export class ProfileFormEl extends Block {
    constructor(props: {}) {
        super('li', props);
    }

    protected init() {
        super.init();
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

