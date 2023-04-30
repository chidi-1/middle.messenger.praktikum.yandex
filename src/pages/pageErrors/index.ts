import Block from '../../utils/Block';
import template from './pageError.hbs';
import {ErrorContent} from "../../components/errors";

abstract class PageError extends Block {
  constructor() {
    super('div', {});
  }

  render() {
    return this.compile(template, this.props);
  }
}

export class PageError404 extends PageError {
  constructor() {
    super();
  }

  init() {
    this.children.errorContent = new ErrorContent({
      linkText: "Назад к чатам",
      number: 404,
      text: "Не туда попали"
    })
  }
}

export class PageError500 extends PageError {
  constructor() {
    super();
  }

  init() {
    this.children.errorContent = new ErrorContent({
      linkText: "Назад к чатам",
      number: 500,
      text: "Мы уже фиксим"
    })
  }
}
