import Block from "../../../utils/Block";
import template from './pageFormReg.hbs';
import {FormReg} from "../../../components/form/formReg/formReg";


export class PageReg extends Block {
    constructor() {
        super('div', {});
    }

    protected init() {
        this.element?.classList.add('full-page')

        this.children.form = new FormReg({
            action: 'sdfsd',
            method: 'sdfsd',
            class: 'form'
        })
    }

    protected render(): DocumentFragment {
        return this.compile(template, {})
    }
}
