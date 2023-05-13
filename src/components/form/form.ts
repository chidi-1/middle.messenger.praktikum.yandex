import Block, {IProperties} from "../../utils/Block";
import {submitForm} from "../../utils/funcions";

export interface formProps extends IProperties {
    action: string;
    method: string;
    class?: string;
    iValid?: boolean;
}

export abstract class Form extends Block<formProps> {
    constructor(props: formProps) {
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
