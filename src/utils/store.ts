import {EventBus} from "./EventBus";

export type Indexed<T = unknown> = {
    [key in string]: T;
};

export enum StoreEvents {
    Updated = 'updated',
}

function isObject(item: any): boolean {
    // проверка что item объект и не массив
    return (item && typeof item === 'object' && !Array.isArray(item));
}

function merge(lhs: any, rhs: any): Indexed {
    // deep merge
    // к первом объекту добавляется второй на всех уровнях вложенности
    const source = rhs;

    if (isObject(lhs) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!lhs[key]) Object.assign(lhs, {[key]: {}});
                merge(lhs[key], source[key]);
            } else {
                Object.assign(lhs, {[key]: source[key]});
            }
        }
    }

    return lhs;
}

function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
    // deep работает со вложенными объектами
    // передаем объект, путь и значение. в объекте по указанному пути устанавливаем/заменяем значение
    if (!isObject(object)) {
        return object as unknown;
    }

    let keys = path.split('.');

    let initialValue: Indexed = {};
    initialValue[keys.pop()!] = value
    let out = merge(object, keys.reduceRight<Indexed>((result: Indexed, currentKey: string) => {
        return {[currentKey]: result}
    }, initialValue));

    return out;
}

class Store extends EventBus {
    private state: Indexed = {};

    public getState(): Indexed {
        return this.state;
    }

    public setValue(key: string, value: []){
        this.state[key] = value;
        this.emit(StoreEvents.Updated)
    }

    public update(path: string, value: unknown) {
        set(this.state, path, value);
        this.emit(StoreEvents.Updated)
    }

    public push(key: string, value: {}){
        if(!this.state[key]){
            this.state[key] = []
        }
        (this.state[key] as Indexed[]).push(value)
        this.emit(StoreEvents.Updated)
    }

    public pushArray(key: string, value: []){
        if(!this.state[key]){
            this.state[key] = []
        }

        (this.state[key] as Indexed[]).push(...value)
        this.emit(StoreEvents.Updated)
    }

    public prependArray(key: string, value: []){
        if(!this.state[key]){
            this.state[key] = []
        }

        (this.state[key] as Indexed[]) = [...value, ...(this.state[key] as Indexed[])]
        this.emit(StoreEvents.Updated)
    }
}

const store = new Store();
export default store;
