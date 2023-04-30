import Block from "../../utils/Block";
import template from "./profileForm.hbs";
import {ProfileForm} from "../profileForm";
import {ProfileModal} from "../modal/modal";
import {profileModalProps} from "../modal/profileModalContent";

interface ProfileContentProps {
    modalShow: boolean,
    disabled: boolean,
    modalProps: profileModalProps
}

export class ProfileContent extends Block {
    constructor(props: ProfileContentProps) {
        super('form', props);
    }

    protected init() {
        super.init();
        this.children.form = new ProfileForm(this.props.disabled);
        this.children.modal = new ProfileModal({
            title: this.props.modalProps.title,
            titleError: this.props.modalProps.titleError,
            fileText: this.props.modalProps.fileText,
            hasError: this.props.modalProps.hasError,
            errortext: this.props.modalProps.errortext,
            fileLoaded: this.props.modalProps.fileLoaded,
            inputValue: this.props.modalProps.inputValue,
            formAction: this.props.modalProps.formAction,
            formMethod: this.props.modalProps.formMethod,
        })
    }


    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

