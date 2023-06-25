import {FormChat} from "../../form/formChat/formChat";
import {IModalMessenger, Modal} from "../modal";

export class ModalChat extends Modal<IModalMessenger> {
    constructor(props: IModalMessenger) {
        super(props);
    }

    protected init() {
        super.init();

        this.children.content = new FormChat({
            inputType: this.props.inputType,
            title: this.props.title,
            buttonValue: this.props.buttonValue
        }, this.props.callback)
    }
}

