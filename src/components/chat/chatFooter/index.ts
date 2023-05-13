import template from "./chatFooter.hbs";
import {ButtonWithIcon} from "../../button/buttonWithIcon";
import {FormBlockMsssage} from "../../formBlocks/formBlock";
import {validateForm} from "../../../utils/funcions";
import {Form, formProps} from "../../form/form";

export class ChatFooter extends Form {
    constructor(props: formProps, showMenu: {showMenu: boolean}) {
        super({...props, ...showMenu});
    }

    protected init() {

        super.init();
        this.element?.classList.add('chat__footer');

        this.children.input = new FormBlockMsssage({});

        this.children.button = new ButtonWithIcon({
            class: "no-style send-message",
            events: {
                click: () => {
                    validateForm(this);
                }
            },
            iconClass: "icon-arrow-right",
            type: "submit"
        })
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

