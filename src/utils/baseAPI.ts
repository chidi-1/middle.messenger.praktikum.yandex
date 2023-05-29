export abstract class BaseAPI{

}

interface UserData {
    first_name: string,
    second_name: string,
    login: string,
    email: string,
    password: string,
    phone: string
}

export class UserAPI extends BaseAPI{
    public async create(data:UserData) {}
}
