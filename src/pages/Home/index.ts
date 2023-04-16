import Block from '../../utils/Block';
import template from './home.hbs';
import {Button} from '../../components/button/';
import {Input, inputType} from '../../components/input/';

interface HomePageProps {
  title: string;
}

export class HomePage extends Block {
  constructor(props: HomePageProps) {
    super('div', props);
  }

  init() {
    this.children.button = new Button({
      label: 'Click me',
      events: {
        click: () => console.log('clicked'),
      },
    });

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
