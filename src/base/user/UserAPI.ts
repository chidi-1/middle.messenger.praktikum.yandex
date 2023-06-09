import HTTPTransport, {BaseData} from "../../utils/HTTPTransport";
import {BaseAPI} from "../../utils/baseAPI";

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
export interface UserDataResponseInfo extends BaseData{
    id: number,
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    email: string,
    phone: string,
    avatar: string
}
export interface UserDataAuth extends BaseData{
    login: string,
    password: string,
}

class UserAPI extends BaseAPI{
    public async create(data:UserDataReg) {
        let response = HTTPTransport.post<UserDataReg, CreateUserResponse>('https://ya-praktikum.tech/api/v2/auth/signup',data,{headers: {'Content-Type': 'application/json;charset=UTF-8'}});
        response.then((createUserResponse:CreateUserResponse) => {
            console.log(createUserResponse)
        })

        response.catch((smth) => {
            console.log(smth)
        })

        return response;
    }

    public async auth(data:UserDataAuth) {
        return await HTTPTransport.post<UserDataAuth, CreateUserResponse>('https://ya-praktikum.tech/api/v2/auth/signin',data,{headers: {'Content-Type': 'application/json;charset=UTF-8'}, notNeedJsonTransform: true});
    }

    public async requestUserInfo() {
        return await HTTPTransport.get<BaseData, UserDataResponseInfo>('https://ya-praktikum.tech/api/v2/auth/user',{},{headers: {'Content-Type': 'application/json;charset=UTF-8'}});
    }
}

export default new UserAPI();
