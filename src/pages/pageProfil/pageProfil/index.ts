import Block from '../../../utils/Block';
import template from './pageProfil.hbs';
import {ProfileFormDisabled} from "../../../components/profileFormDisabled";


export class PageProfil extends Block {
    constructor() {
        super('div', {});
    }

    protected init() {
        super.init();
        this.element?.classList.add('correspondence')

        this.children.form = new ProfileFormDisabled()
    }

    render() {
        return this.compile(template, this.props);
    }
}
