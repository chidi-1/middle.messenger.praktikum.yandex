import template from "../components/button/button2.hbs";
import * as templateInput from "../components/input/input2.hbs"

export class Block {
    html: DocumentFragment|null = null;
    temp: string = "";

    constructor() {
        this.createTemplate();
        this.createHTML();
    }

    createTemplate(){
        this.temp = template({'type': '', 'class': 'button_blue', 'value': 'Кнопка'})
    }

    createHTML(){
        let dsfsdfhtml = document.createElement('template');
        dsfsdfhtml.innerHTML = this.temp;
        this.html = dsfsdfhtml.content;
    }

    after () {
    }
}

export class NewBlock extends Block {
    createTemplate() {
        super.createTemplate();
        this.temp = templateInput.default({'placeholder': 'Текст'})
    }
}