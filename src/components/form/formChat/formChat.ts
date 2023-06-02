import {FormBlock, FormBlockLogin, IFormBlockProps,} from "../../formBlocks/formBlock";
import {Button} from "../../button/buttonSimple";
import {validateForm} from "../../../utils/funcions";
import {Form, IFormProps} from "../form";
import template from "./formChat.hbs";
import {ChatDataCreate} from "../../../base/chat/ChatAPI";
import ChatController from "../../../base/chat/ChatController";

export interface IFormChatProps extends IFormProps{
    inputType: typeof FormBlock<IFormBlockProps>;
    title: string;
    buttonValue: string;
}

export class FormChat extends Form<IFormChatProps> {
    callback: () => void;

    constructor(props:IFormChatProps, callback: () => void) {
        super(props);
        this.callback = callback;
    }

    protected init() {
        super.init();

        this.children.formBlock = new this.props.inputType({});

        this.children.button = new Button({
            class: "button",
            events: {
                click: () => {
                    validateForm(this);
                }
            },
            label: this.props.buttonValue,
            type: "submit"
        })
    }

    submit() {
        let data:ChatDataCreate = {
            title: this.children.formBlock.getValue(),
        }

        ChatController.create(data).then(() => {this.callback()});
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}
