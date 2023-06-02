/*
import Block, {IProperties} from "./Block";
import store, {Indexed, StoreEvents} from "./store";

interface IBlock {
    setProps: (data:any) => void
}

export function storeFilter<T extends IProperties, TY extends Block<T>>(block: typeof Block<T>, func: (storeData: Indexed) => T): new (...args:ConstructorParameters<TY>) => TY{
    return class extends block{
        constructor(...args:ConstructorParameters<TY>) {
            super(...args);

            store.on(StoreEvents.Updated, () => {
                this.setProps(func(store.getState()))
            })
        }
    }
}
*/
