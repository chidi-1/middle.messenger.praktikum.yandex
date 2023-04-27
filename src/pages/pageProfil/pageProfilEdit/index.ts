import Block from '../../../utils/Block';
import template from './pageProfilEdit.hbs';
import {ProfileForm} from "../../../components/profileForm";


export class PageProfilEdit extends Block {
    constructor() {
        super('div', {});
    }

    protected init() {
        super.init();
        this.element?.classList.add('correspondence')

        this.children.form = new ProfileForm()
    }

    render() {
        return this.compile(template, this.props);
    }
}
