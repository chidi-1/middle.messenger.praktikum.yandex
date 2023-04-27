import Block from '../../../utils/Block';
import template from './pageProfileModalLoad.hbs';
import {ProfileForm} from "../../../components/profileForm";
import {ProfileModal} from "../../../components/profileModal";


export class PageProfileModalLoaded extends Block {
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
            fileLoaded: true,
            text: "pic.jpg",
            hasError: false,
        })
    }

    render() {
        return this.compile(template, this.props);
    }
}
