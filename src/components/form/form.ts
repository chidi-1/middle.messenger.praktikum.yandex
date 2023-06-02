import Block, {IProperties} from "../../utils/Block";
import {submitForm} from "../../utils/funcions";

export interface IFormProps extends IProperties {
    class?: string;
    iValid?: boolean;
}

export abstract class Form<T extends IFormProps> extends Block<T> {
    constructor(props: T) {
        const defaultProps = {
            'events': {
                'submit': (event) => {
                    event.preventDefault()
                    this.submit();
                },
            }
        }
        super('form', {...defaultProps, ...props});
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

    abstract submit():void;

    isValid(): boolean|undefined{
        return this.props.iValid;
    }
}
