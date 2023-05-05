import Block from '../../../utils/Block';
import template from './pageProfileModal.hbs';
import {ProfileContent} from "../../../components/pageProfile/profileContent";

export class pageProfilModal extends Block {
    constructor() {
        super('div', {});
    }

    protected init() {
        super.init();
        this.element?.classList.add('correspondence')

        this.children.content = new ProfileContent({
            modalShow: true,
            disabled: true,
            modalProps: {
                title: 'Загрузите файл',
                fileText: 'Выбрать файл на компьютере',
                hasError: false,
                fileLoaded: false,
                formAction: '',
                formMethod: 'post',
            }
        })
    }

    render() {
        return this.compile(template, this.props);
    }
}
