import Block, {IProperties} from "./Block";

function isEqual(lhs:string, rhs:string) {
    return lhs === rhs;
}

export class Route {
    _pathname: string;
    _block?: Block<IProperties>;
    _blockClass: typeof Block<IProperties>;
    _props: {rootQuery: string};
    constructor(pathname:string, view: typeof Block<IProperties>, props: {rootQuery: string}) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = undefined;
        this._props = props;
    }

    tryToNavigate(pathname:string):boolean {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
            return true
        }
        return false;
    }

    leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname:string) {
        return isEqual(pathname, this._pathname);
    }

    render() {
        if (!this._block) {
            this._block = new this._blockClass({});
            inject(this._props.rootQuery, this._block);
            return;
        }

        this._block.show();
    }
}

function inject(query:string, block:Block<IProperties>) {
    const root = document.getElementById(query);
    //root.innerHTML = '';
    root!.append(block.getContent()!);
    block.dispatchComponentDidMount();
    return root;
}

