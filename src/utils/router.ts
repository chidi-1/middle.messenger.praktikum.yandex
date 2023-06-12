import {Route} from "./route";
import Block, {IProperties} from "./Block";
import UserController from "../base/user/UserController";

export class Router {
    _rootQuery?: string;
    static __instance: Router;
    routes: Route[] = [];
    private history?: History;
    _currentRoute?: Route

    constructor() {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.history = window.history;
        this._currentRoute = undefined;

        Router.__instance = this;
    }

    use(pathname: string, block: typeof Block<IProperties>) {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery!});
        this.routes.push(route);
        return this;
    }

    setup(rootQuery: string) {
        this._rootQuery = rootQuery;
    }

    start() {
        UserController.updateUserInfo().then(() => {
            this.go(window.location.pathname);
        }).catch(() => {
            this.go("/");
        })

        window.addEventListener("popstate", (event) => {
            this._onRoute(window.location.pathname)
        })
    }

    _onRoute(pathname: string) {
        const route = this.getRoute(pathname);

        if (this._currentRoute) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        route!.render();
    }

    go(pathname: string) {
        this.history!.pushState({}, "", pathname);
        this._onRoute(pathname);
    }

    back() {
        this.history!.back();
    }

    forward() {
        this.history!.forward();
    }

    getRoute(pathname: string): Route {
        return this.routes.find(route => route.match(pathname));
    }
}
