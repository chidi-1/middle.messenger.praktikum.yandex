import Block from '../../../utils/Block';
import template from './pageError-404.hbs';
import {Button} from '../../../components/button/';
import {renderDom} from "../../../utils/renderDom";
import {ErrorContent} from "../../../components/errors";

export class PageError404 extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.errorContent = new ErrorContent({
      linkText: "Назад к чатам",
      number: 404,
      text: "Не туда попали"
    })

    this.children.buttonHome = new Button({
      label: 'Вернуться к списку страниц',
      events: {
        click: () => renderDom('home')
      },
    });
  }


  render() {
    return this.compile(template, this.props);
  }
}
