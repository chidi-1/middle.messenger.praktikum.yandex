import Block from "../../utils/Block";
import template from "./error.hbs"

interface ErrorProps {
    number: number;
    text: string;
    linkText: string
}

export class ErrorContent extends  Block {
    constructor(props: ErrorProps) {
        super('div', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('full-page')
    }

    protected render(): DocumentFragment {
        return super.compile(template, this.props)
    }

}