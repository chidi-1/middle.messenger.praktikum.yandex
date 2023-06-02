import Block, {IProperties} from '../../utils/Block';
import template from './home.hbs';
import {Button} from '../../components/button/buttonSimple';
import {renderDom} from "../../utils/renderDom";
import {Router} from "../../utils/router";

interface HomePageProps extends IProperties {
    title: string;
}

export class HomePage extends Block<HomePageProps> {
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
                click: () => new Router().go('/login')
            }
        })
        this.children.buttonReg = new Button({
            label: "Перейти",
            events: {
                click: () => new Router().go('/sign-up')
            }
        })
        this.children.buttonChatEmpty = new Button({
              label: 'Перейти',
              events: {
                click: () => renderDom('pageChatEmpty')
              },
            });
        this.children.buttonChat = new Button({
              label: 'Перейти',
              events: {
                click: () => renderDom('pageChat')
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
                click: () => renderDom('pageChatSearch')
              },
            });
        this.children.buttonChatAddUser = new Button({
              label: 'Перейти',
              events: {
                click: () => renderDom('pageChatAddUser')
              },
            });
        this.children.buttonChatRemoveUser = new Button({
              label: 'Перейти',
              events: {
                click: () => renderDom('pageChatRemoveUser')
              },
            });

        this.children.buttonProfil = new Button({
              label: 'Перейти',
              events: {
                click: () => renderDom('pageProfil')
              },
            });
        this.children.buttonProfilEdit = new Button({
              label: 'Перейти',
              events: {
                click: () => renderDom('pageProfilEdit')
              },
            });
        this.children.buttonProfileModal = new Button({
              label: 'Перейти',
              events: {
                click: () => renderDom('pageProfileModal')
              },
            });
        this.children.buttonProfileModalLoaded = new Button({
              label: 'Перейти',
              events: {
                click: () => renderDom('pageProfileModalLoaded')
              },
            });
        this.children.buttonProfileModalErrorLoad = new Button({
              label: 'Перейти',
              events: {
                click: () => renderDom('pageProfileModalErrorLoad')
              },
            });
        this.children.buttonProfileModalErrorFile = new Button({
              label: 'Перейти',
              events: {
                click: () => renderDom('pageProfileModalErrorFile')
              },
            });
    }


    render() {
        return this.compile(template, this.props);
    }
}
