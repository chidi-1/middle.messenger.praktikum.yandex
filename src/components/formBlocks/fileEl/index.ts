import Block, {IProperties} from "../../../utils/Block";
import {Input} from "../../input/input";
import template from "./startFormEl.hbs";

export interface FileFormElProps extends IProperties{
    fileLoaded: boolean,
    text: string,
    inputType: Input
}

export class FileFormEl extends Block<FileFormElProps> {
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

