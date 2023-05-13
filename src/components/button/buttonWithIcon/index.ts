import Block, {IProperties} from "../../../utils/Block";
import template from "./buttonWithIcon.hbs";

export interface ButtonIconProps extends IProperties{
    class?: string,
    type?: string,
    iconClass: string,
    events: {
        click: () => void;
    };
}

export class ButtonWithIcon extends Block<ButtonIconProps> {
    constructor(props: ButtonIconProps) {
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
