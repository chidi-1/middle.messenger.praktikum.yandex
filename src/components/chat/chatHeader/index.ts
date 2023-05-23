import Block, {IProperties} from "../../../utils/Block";
import template from "./chatHeader.hbs";

export interface dropdownMenuProps extends IProperties {
    showMenu: boolean;
}

export class ChatHeader extends Block<dropdownMenuProps> {
    constructor(props: dropdownMenuProps) {
        super('div', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('chat__header');
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

