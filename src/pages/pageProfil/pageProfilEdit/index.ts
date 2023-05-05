import Block from '../../../utils/Block';
import template from './pageProfilEdit.hbs';
import {ProfileContent} from "../../../components/pageProfile/profileContent";

export class pageProfilEdit extends Block {
    constructor() {
        super('div', {});
    }

    protected init() {
        super.init();
        this.element?.classList.add('correspondence')

        this.children.content = new ProfileContent({
            modalShow: false,
            disabled: false,
        })
    }

    render() {
        return this.compile(template, this.props);
    }
}
