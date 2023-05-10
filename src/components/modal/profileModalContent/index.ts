import template from "./profileModalContent.hbs";
import {Button} from "../../button/buttonSimple";
import {Input2, inputType} from "../../input/input";
import Block from "../../../utils/Block";
import {FileFormEl} from "../../formBlocks/fileEl";

export interface profileModalProps {
    title: string,
    titleError?: boolean,
    fileText: string,
    hasError: boolean,
    errortext?: string,
    fileLoaded: boolean,
    inputValue?: string,
    formAction: string,
    formMethod: string,
}

export class ProfileModalContent extends Block {
    constructor(props: profileModalProps) {
        super('form', props);
    }

    protected init() {
        super.init();

        this.element?.setAttribute('action', this.props.formAction)
        this.element?.setAttribute('method', this.props.formMethod)

        this.children.inputEl = new FileFormEl({
            fileLoaded: this.props.fileLoaded,
            inputType: new Input2({
                type: inputType.file,
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

