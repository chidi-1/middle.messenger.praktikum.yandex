import {HomePage} from "../pages/Home";
import {PageError404, PageError500} from "../pages/pageErrors";
import {PageLogin} from "../pages/pageForms/pageFormLogin";
import {PageReg} from "../pages/pageForms/pageFormReg";
import {PageChatEmpty} from "../pages/pageChat/pageChatEmpty";
import {PageChat} from "../pages/pageChat/pageChat";
import {PageChatFunctions} from "../pages/pageChat/pageChatFunctions";
import {PageChatSearch} from "../pages/pageChat/pageChatSearch";
import {PageChatAddUser} from "../pages/pageChat/pageChatAddUser";
import {PageChatRemoveUser} from "../pages/pageChat/pageChatRemoveUser";
import {pageProfil} from "../pages/pageProfil/pageProfil";
import {pageProfilEdit} from "../pages/pageProfil/pageProfilEdit";
import {pageProfilModal} from "../pages/pageProfil/pageProfileModal";
import {PageProfileModalLoaded} from "../pages/pageProfil/pageProfileModalLoad";
import {PageProfileModalErrorFile} from "../pages/pageProfil/pageProfileModalErrorFile";
import {PageProfileModalErrorLoad} from "../pages/pageProfil/pageProfileModalErrorLoad";

const ROUTES = {
    home: HomePage,
    page404: PageError404,
    page500: PageError500,

    pageLogin: PageLogin,
    pageReg: PageReg,

    pageChatEmpty: PageChatEmpty,
    pageChat: PageChat,
    pageChatFunctions: PageChatFunctions,
    pageChatSearch: PageChatSearch,
    pageChatAddUser: PageChatAddUser,
    pageChatRemoveUser: PageChatRemoveUser,

    pageProfil: pageProfil,
    pageProfilEdit: pageProfilEdit,
    pageProfileModal: pageProfilModal,
    pageProfileModalLoaded: PageProfileModalLoaded,
    pageProfileModalErrorLoad: PageProfileModalErrorLoad,
    pageProfileModalErrorFile: PageProfileModalErrorFile,
}

export function renderDom(route: keyof typeof ROUTES) {
    const root = document.getElementById('root')!;

    root.innerHTML = '';

    const PageComponent = ROUTES[route];
    const page = new PageComponent({});

    root.append(page.getContent()!);
    page.dispatchComponentDidMount();
}