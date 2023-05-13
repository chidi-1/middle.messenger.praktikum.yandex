import Block, {IProperties} from "../../../utils/Block";
import template from "./buttonWithIconAndText.hbs";

export interface ButtonIconTextProps  extends IProperties{
    label: string;
    class?: string,
    type?: string,
    iconClass: string,
    events: {
        click: () => void;
    };
}

export class Button extends Block<ButtonIconTextProps> {
    constructor(props: ButtonIconTextProps) {
        super('button', props);
    }
    protected init() {
        if(this.props.class){
            const classes = this.props.class.split(' ')
            for (const classEl of classes) {
                this.element?.classList.add(classEl)
            }
        }
        if(this.props.type){
            this.element?.setAttribute('type', this.props.type);
        }
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}
