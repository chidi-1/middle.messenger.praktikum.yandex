import Block from '../../../utils/Block';
import template from './pageProfil.hbs';
import {ProfileContent} from "../../../components/pageProfile/profileContent";

export class pageProfil extends Block {
    constructor() {
        super('div', {});
    }

    protected init() {
        super.init();
        this.element?.classList.add('correspondence')

        this.children.content = new ProfileContent({
            modalShow: false,
            disabled: true,
        })
    }

    render() {
        return this.compile(template, this.props);
    }
}
