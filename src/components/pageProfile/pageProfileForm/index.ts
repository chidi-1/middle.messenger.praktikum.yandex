import Block from "../../../utils/Block";
import template from "./pageProfileForm.hbs";
import {Button} from "../../button/buttonSimple";
import {
    FormBlockChatname,
    FormBlockLogin,
    FormBlockName,
    FormBlockPhone,
    FormBlockSurname
} from "../../formBlocks/formBlock";
import {validateForm} from "../../../utils/funcions";
import {Form, formProps} from "../../form/form";

export class ProfileForm extends Form {
    constructor(props: formProps, disabled: {disabled: boolean}) {
        super({...props, ...disabled});
    }

    protected init() {
        super.init();
        this.element?.classList.add('edit-settings');

        this.children.blockLogin = new FormBlockLogin({disabled: this.props.disabled, value: profileData.login})
        this.children.blockName = new FormBlockName({disabled: this.props.disabled, value: profileData.name})
        this.children.blockSurname = new FormBlockSurname({disabled: this.props.disabled, value: profileData.surname})
        this.children.blockChatname = new FormBlockChatname({disabled: this.props.disabled, value: profileData.chatname})
        this.children.blockPhone = new FormBlockPhone({disabled: this.props.disabled, value: profileData.phone})

        this.children.button = new Button({
            events: {
                click: () => {
                    validateForm(this);
                }
            },
            label: "Сохранить",
            class: "button m-auto",
            type: 'submit'
        })
    }


    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}
