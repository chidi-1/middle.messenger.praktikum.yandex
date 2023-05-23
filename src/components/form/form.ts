import Block, {IProperties} from "../../utils/Block";
import {submitForm} from "../../utils/funcions";

export interface IFormProps extends IProperties {
    action: string;
    method: string;
    class?: string;
    iValid?: boolean;
}

export abstract class Form<T extends IFormProps> extends Block<T> {
    constructor(props: T) {
        const defaultProps = {
            'events': {
                'submit': () => {
                    submitForm(this);
                    event?.preventDefault()
                },
            }
        }
        super('form', {...props, ...defaultProps});
    }

    protected init() {
        super.init();
        if(this.props.class){
            const classes = this.props.class.split(' ')
            for (const classEl of classes) {
                this.element?.classList.add(classEl)
            }
        }
    }

    isValid(): boolean|undefined{
        return this.props.iValid;
    }
}
