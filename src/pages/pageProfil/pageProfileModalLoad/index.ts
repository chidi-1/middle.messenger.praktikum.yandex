import Block from '../../../utils/Block';
import template from './pageProfileModalLoad.hbs';
import {ProfileContent} from "../../../components/pageProfile/profileContent";


export class PageProfileModalLoaded extends Block {
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
                fileText: file.name,
                hasError: false,
                fileLoaded: true,
                formAction: '',
                formMethod: 'post',
            }
        })
    }

    render() {
        return this.compile(template, {});
    }
}
