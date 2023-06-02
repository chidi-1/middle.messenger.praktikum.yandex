import HTTPTransport, {BaseData} from "../../utils/HTTPTransport";
import {BaseAPI} from "../../utils/baseAPI";
import {Router} from "../../utils/router";

interface CreateUserResponse extends BaseData{
    id: number
}
export interface UserDataReg extends BaseData{
    first_name: string,
    second_name: string,
    login: string,
    email: string,
    password: string,
    phone: string
}
export interface UserDataAuth extends BaseData{
    login: string,
    password: string,
}

class UserAPI extends BaseAPI{
    public async create(data:UserDataReg) {
        let sdf = HTTPTransport.post<UserDataReg, CreateUserResponse>('https://ya-praktikum.tech/api/v2/auth/signup',data,{headers: {'Content-Type': 'application/json;charset=UTF-8'}});
        sdf.then((createUserResponse:CreateUserResponse) => {
            console.log(createUserResponse)
        })

        sdf.catch((smth) => {
            console.log(smth)
        })

        return sdf;
    }

    public async auth(data:UserDataAuth) {
        let sdf = HTTPTransport.post<UserDataAuth, CreateUserResponse>('https://ya-praktikum.tech/api/v2/auth/signin',data,{headers: {'Content-Type': 'application/json;charset=UTF-8'}, notNeedJsonTransform: true});

        sdf.catch((smth) => {
            console.log(smth)
        })

        return sdf;
    }
}

export default new UserAPI();
