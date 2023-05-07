import Block from "../../../utils/Block";
import template from "./pageProfileForm.hbs";
import {InputPhone, InputText} from "../../form/input";
import {ProfileFormEl} from "../../form/profileEl";
import {Button} from "../../button";

export class ProfileForm extends Block {
    constructor(disabled: boolean) {
        super('form', {disabled: disabled});
    }

    protected init() {
        super.init();
        this.element?.classList.add('edit-settings');
        this.element?.setAttribute('action', 'sdf');
        this.element?.setAttribute('method', 'post');

        this.children.profileElLogin = new ProfileFormEl({
            input: new InputText({
                name: "login",
                required: true,
                disabled: this.props.disabled,
                value: profileData.login

            }),
            label: "Логин"
        })

        this.children.profileElName = new ProfileFormEl({
            input: new InputText({
                name: "first_name",
                required: true,
                disabled: this.props.disabled,
                value: profileData.name

            }),
            label: "Имя"
        })

        this.children.profileElSurname = new ProfileFormEl({
            input: new InputText({
                name: "second_name",
                required: true,
                disabled: this.props.disabled,
                value: profileData.surname

            }),
            label: "Фамилия"
        })

        this.children.profileElChatname = new ProfileFormEl({
            input: new InputText({
                name: "display_name",
                required: true,
                disabled: this.props.disabled,
                value: profileData.chatname

            }),
            label: "Имя в чате"
        })

        this.children.profileElPhone = new ProfileFormEl({
            input: new InputPhone({
                name: "phone",
                required: true,
                disabled: this.props.disabled,
                value: profileData.phone

            }),
            label: "Телефон"
        })

        this.children.button = new Button({
            type: "submit",
            class: "button m-auto",
            events: {
                click: function () {
                    return true
                }
            },
            label: 'Сохранить'
        })
    }


    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

