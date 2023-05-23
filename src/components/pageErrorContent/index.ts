import Block, {IProperties} from "../../utils/Block";
import template from "./error.hbs"

interface ErrorProps extends IProperties {
    number: number;
    text: string;
    linkText: string
}

export class ErrorContent extends  Block<ErrorProps> {
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
