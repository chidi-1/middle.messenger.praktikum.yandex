import Block from '../../../utils/Block';
import template from './pageProfileModalErrorLoad.hbs';
import {ProfileContent} from "../../../components/pageProfile/profileContent";


export class PageProfileModalErrorLoad extends Block {
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
                title: 'Ошибка, попробуйте ещё раз',
                titleError: true,
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
