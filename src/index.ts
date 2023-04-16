//import {Block} from "./core/core";

import {PageChatEmpty} from "./pages/pageChat/pageChat-empty";
import {Button} from "./components/button";

window.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const pageChatEmpty = new PageChatEmpty({ title: 'Страница' });

    root.append(pageChatEmpty.getContent()!);
    pageChatEmpty.dispatchComponentDidMount();
})