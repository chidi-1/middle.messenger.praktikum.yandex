import Block from '../../../utils/Block';
import template from './pageError-404.hbs';
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
  }


  render() {
    return this.compile(template, this.props);
  }
}
