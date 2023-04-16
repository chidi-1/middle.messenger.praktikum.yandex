import Block from '../../../utils/Block';
import template from './pageChat-empty.hbs';
import {FormSearchChat} from "../../../components/search";
import {ContactsList} from "../../../components/contact"
import {Input, inputType} from '../../../components/input/';

interface PageChatProps {
  title: string;
}

export class PageChatEmpty extends Block {
  constructor(props: PageChatProps) {
    super('div', props);
  }

  protected init() {
    super.init();
    this.element?.classList.add('correspondence')

    this.children.formSearch = new FormSearchChat({
      type: inputType.text,
      name: 'search',
      class: 'search-input',
      label: 'Поиск',
    })

    this.children.input = new Input({
      type: inputType.text,
      name: 'text',
      class: 'input',
      label: 'Сообщение',
      required: true,
    })
  }

  render() {
    return this.compile(template, this.props);
  }
}
