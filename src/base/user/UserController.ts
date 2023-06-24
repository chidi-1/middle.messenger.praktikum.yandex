import UserAPI, {UserDataAuth, UserDataReg, UserDataSearch} from "./UserAPI";
import {Router} from "../../utils/router";
import store from "../../utils/store";

class UserController {

    async registration(data: UserDataReg) {
        return await UserAPI.create(data)
    }

    async login(data: UserDataAuth) {
        await UserAPI.auth(data);
        await this.updateUserInfo();
    }

    async updateUserInfo() {
        return UserAPI.requestUserInfo().then((info) => {
            store.update('userInfo', info);
        })
    }

    async searchUser(data: UserDataSearch) {
        return UserAPI.requestSearchUserInfo(data)
    }

    async registrationWithAuth() {
        new Router().go('/messenger')
    }
}

export default new UserController();
