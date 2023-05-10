import Block from "../../../utils/Block";
import template from "./profileContent.hbs";
import {ProfileModal} from "../../modal/modal";
import {ProfileForm} from "../pageProfileForm";
import {profileModalProps} from "../../modal/profileModalContent";

interface ProfileContentProps {
    modalShow: boolean,
    disabled: boolean,
    modalProps?: profileModalProps
}

export class ProfileContent extends Block {
    constructor(props: ProfileContentProps) {
        super('div', props);
    }

    protected init() {
        super.init();
        this.children.form = new ProfileForm({
            action: 'sdf',
            method: 'sdf',
            class: 'edit-settings'
        }, {disabled: this.props.disabled});

        if(this.props.modalShow){
            this.children.modal = new ProfileModal(this.props.modalProps)
        }
    }


    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

