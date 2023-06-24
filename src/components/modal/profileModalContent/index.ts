import template from "./profileModalContent.hbs";
import {Button} from "../../button/buttonSimple";
import {Input, InputType} from "../../input/input";
import Block from "../../../utils/Block";
import {FileFormEl} from "../../formBlocks/fileEl";
import {IProfileModalProps} from "../modal";

export class ProfileModalContent extends Block<IProfileModalProps> {
    constructor(props: IProfileModalProps) {
        super('form', props);
    }

    protected init() {
        super.init();

        this.element?.setAttribute('action', this.props.action)
        this.element?.setAttribute('method', this.props.method)

        this.children.inputEl = new FileFormEl({
            fileLoaded: this.props.fileLoaded,
            inputType: new Input({
                type: InputType.file,
                name: "file",
                required: true,
                value: this.props.inputValue
            }),
            text: this.props.fileText,
        });

        this.children.button = new Button({
            class: "button",
            events: {
                click: function () {
                    return true
                }
            },
            label: 'Поменять',
            type: "submit"
        })
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

