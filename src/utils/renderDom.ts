import {HomePage} from "../pages/Home";
import {PageError404} from "../pages/pageErrors/pageError-404";
import {PageChatEmpty} from "../pages/pageChat/pageChatEmpty";
import {PageError500} from "../pages/pageErrors/pageError-500";
import {PageLogin} from "../pages/pageForms/pageFormLogin";
import {PageReg} from "../pages/pageForms/pageFormReg";
import {PageChatCorrespondence} from "../pages/pageChat/pageChatCorrespondence";
import {PageChatFunctions} from "../pages/pageChat/pageChatFunctions";
import {PageChatSearch} from "../pages/pageChat/pageChatSearch";
import {PageChatAddUser} from "../pages/pageChat/pageChatAddUser";
import {PageChatRemoveUser} from "../pages/pageChat/pageChatRemoveUser";
import {PageProfilEdit} from "../pages/pageProfil/pageProfilEdit";
import {PageProfil} from "../pages/pageProfil/pageProfil";
import {PageProfileModal} from "../pages/pageProfil/pageProfileModal";
import {PageProfileModalLoaded} from "../pages/pageProfil/pageProfileModalLoad";
import {PageProfileModalErrorLoad} from "../pages/pageProfil/pageProfileModalErrorLoad";
import {PageProfileModalErrorFile} from "../pages/pageProfil/pageProfileModalErrorFile";

const ROUTES = {
    home: HomePage,
    page404: PageError404,
    page500: PageError500,

    pageLogin: PageLogin,
    pageReg: PageReg,

    pageChatEmpty: PageChatEmpty,
    pageChatCorrespondence: PageChatCorrespondence,
    pageChatFunctions: PageChatFunctions,
    pageChatSearch: PageChatSearch,
    pageChatAddUser: PageChatAddUser,
    pageChatRemoveUser: PageChatRemoveUser,

    pageProfil: PageProfil,
    pageProfilEdit: PageProfilEdit,
    pageProfileModal: PageProfileModal,
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