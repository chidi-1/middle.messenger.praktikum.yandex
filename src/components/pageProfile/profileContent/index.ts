import Block, {IProperties} from "../../../utils/Block";
import template from "./profileContent.hbs";
import {IProfileModalProps, ProfileModal} from "../../modal/modal";
import {ProfileForm} from "../pageProfileForm";

interface ProfileContentProps extends IProperties {
    modalShow: boolean,
    disabled: boolean,
    modalProps?: IProfileModalProps
}

export class ProfileContent extends Block<ProfileContentProps> {
    constructor(props: ProfileContentProps) {
        super('div', props);
    }

    protected init() {
        super.init();
        this.children.form = new ProfileForm({
            action: 'sdf',
            method: 'sdf',
            class: 'edit-settings',
            disabled: this.props.disabled});

        if(this.props.modalShow && this.props.modalProps){
            this.children.modal = new ProfileModal(this.props.modalProps)
        }
    }


    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

