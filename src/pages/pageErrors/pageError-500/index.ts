import Block from "../../../utils/Block";
import template from "./pageError-500.hbs"
import {ErrorContent} from "../../../components/errors";
import {Button} from "../../../components/button";
import {renderDom} from "../../../utils/renderDom";

export class PageError500 extends Block {
    constructor() {
        super('div', {});
    }

    init() {
        this.children.errorContent = new ErrorContent({
            linkText: "Назад к чатам",
            number: 500,
            text: "Мы уже фиксим"}
        );
    }

    render() {
        return this.compile(template, this.props)
    }
}