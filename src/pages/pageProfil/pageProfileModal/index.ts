/*
import Block from '../../../utils/Block';
import template from './pageProfileModal.hbs';
import {ProfileForm} from "../../../components/profileForm";
import {ProfileModal} from "../../../components/profileModal";


export class PageProfileModal extends Block {
    constructor() {
        super('div', {});
    }

    protected init() {
        super.init();
        this.element?.classList.add('correspondence')

        this.children.form = new ProfileForm()
        this.children.modal = new ProfileModal({
            title: 'Загрузите файл',
            titleError: false,
            name: "avatar",
            fileLoaded: false,
            text: "Выбрать файл на компьютере",
            hasError: false,
        })
    }

    render() {
        return this.compile(template, this.props);
    }
}
*/
