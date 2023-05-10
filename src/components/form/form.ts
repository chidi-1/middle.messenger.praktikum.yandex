import Block from "../../utils/Block";
import {submitForm} from "../../utils/funcions";

export interface formProps {
    action: string;
    method: string;
    class?: string;
    iValid?: boolean;
}

export abstract class Form extends Block {
    constructor(props: formProps) {
        const defaultProps = {
            'events': {
                'submit': () => {
                    console.log('submit');
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

    isValid(): boolean{
        return this.props.iValid;
    }
}
