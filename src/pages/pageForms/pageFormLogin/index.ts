import Block from "../../../utils/Block";
import template from './pageFormLogin.hbs';
import {FormLogin} from "../../../components/form/formLogin/formLogin";

export class PageLogin extends Block {
    constructor() {
        super('div', {});
    }

    protected init() {
        this.element?.classList.add('full-page')

        this.children.form = new FormLogin({
            action: 'sdfsd',
            method: 'sdfsd',
            class: 'form'
        })
    }

    protected render(): DocumentFragment {
        return this.compile(template, {})
    }
}
