import Block from '../../utils/Block';
import template from './home.hbs';
import {Button} from '../../components/button/';
import {renderDom} from "../../utils/renderDom";

interface HomePageProps {
  title: string;
}

export class HomePage extends Block {
  constructor(props: HomePageProps) {
    super('div', props);
  }

  init() {
    this.children.button404 = new Button({
      label: "Перейти",
      events: {
        click: () => renderDom('page404')
      }
    });
    this.children.button500 = new Button({
      label: "Перейти",
      events: {
        click: () => renderDom('page500')
      }
    })
    this.children.buttonLogin = new Button({
      label: "Перейти",
      events: {
        click: () => renderDom('pageLogin')
      }
    })
    this.children.buttonReg = new Button({
      label: "Перейти",
      events: {
        click: () => renderDom('pageReg')
      }
    })
    this.children.buttonChatEmpty = new Button({
      label: 'Перейти',
      events: {
        click: () => renderDom('pageChatEmpty')
      },
    });
    this.children.buttonChatCorrespondence = new Button({
      label: 'Перейти',
      events: {
        click: () => renderDom('pageChatCorrespondence')
      },
    });
    this.children.buttonChatFunctions = new Button({
      label: 'Перейти',
      events: {
        click: () => renderDom('pageChatFunctions')
      },
    });
    this.children.buttonChatSearch = new Button({
      label: 'Перейти',
      events: {
        click: () => renderDom('PageChatSearch')
      },
    });
  }


  render() {
    return this.compile(template, this.props);
  }
}
