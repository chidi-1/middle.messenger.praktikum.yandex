import Block from "../../utils/Block";
import template from "./contact.hbs";

let contacts = [
    {name: "Андрей", message: "Изображение", "time": "10:49", "unread": 2},
    {name: "Киноклуб", message: "стикер", "answer": true, time: "12:00"},
    {name: "Илья", message: "Друзья, у меня для вас особенный выпуск новостей! И еще какой-то текст", time: "15:12", unread: 4},
    {name: "Вадим", message: "Круто", answer: true, time: "Пт"},
    {name: "тет-а-теты", message: "И Human Interface Guidelines и Material Design рекомендуют вы", time: "Ср"},
    {name: "1, 2, 3", message: "Миллионы россиян ежедневно проводят десятки часов своего сна", time: "Пн"},
    {name: "Design Destroyer", message: "В 2008 году художник Jon Rafman  начал собирать", time: "Пн"},
    {name: "Day", message: "Так увлёкся работой по курсу, что совсем забыл его анонсировать", time: "1 Мая 2020"},
    {name: "Стас Рогозин,  message: Можно или сегодня или завтра вечером", time: "12 Апр 2020"},
]

interface contactProps {
    class: string;
    name: string;
    date: string;
    message: string;
    answer: boolean;
    unread: number
}

export class ContactsList extends Block {
    constructor(props: contactProps) {
        super('ul', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('contacts');
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

