import UserAPI, {UserDataAuth, UserDataReg} from "./UserAPI";
import {Router} from "../../utils/router";

class UserController {

    async registration(data: UserDataReg) {
        return await UserAPI.create(data)
    }

    async login(data: UserDataAuth) {
        return await UserAPI.auth(data).then(() => {new Router().go('/messenger')})
    }

    async registrationWithAuth() {
        new Router().go('/messenger')
    }
}

export default new UserController();
