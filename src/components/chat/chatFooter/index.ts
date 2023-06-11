import template from "./chatFooter.hbs";
import {ButtonWithIcon} from "../../button/buttonWithIcon";
import {FormBlockMsssage} from "../../formBlocks/formBlock";
import {validateForm} from "../../../utils/funcions";
import {Form, IFormProps} from "../../form/form";

export interface IChatFooterProps extends IFormProps {
    showMenu: boolean;
    chatID?: number;
}

export class ChatFooter extends Form<IChatFooterProps> {

    protected init() {
        super.init();
        this.element?.classList.add('chat__footer');

        this.children.input = new FormBlockMsssage({});

        this.children.button = new ButtonWithIcon({
            class: "no-style send-message",
            events: {
                click: () => {
                    console.log(this.props.chatID)
                    //validateForm(this);
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

