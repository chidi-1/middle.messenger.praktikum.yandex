export type BaseData = {
    [key in string]: string | number | any[]
}

enum METHODS {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE',
}

function queryStringify(data: BaseData = {}) {
    if (typeof data !== 'object') {
        throw new Error('Data must be object');
    }

    const keys = Object.keys(data);

    return keys.reduce((result, key, index) => {
        return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
    }, '?');
}

interface RequestOptions {
    notNeedJsonTransform?: boolean;
    headers?: Record<string, string>;
    method: METHODS,
    timeout?: number
}

class HTTPTransport {
    get<T extends BaseData, TY>(url: string, data: T, options?: RequestOptions) {
        return this.request<T, TY>(url, {...options, method: METHODS.GET}, data);
    }

    put<T extends BaseData, TY>(url: string, data: T, options?: RequestOptions) {
        return this.request<T, TY>(url, {...options, method: METHODS.PUT}, data);
    }

    post<T extends BaseData, TY>(url: string, data: T, options?: RequestOptions) {
        return this.request<T, TY>(url, {...options, method: METHODS.POST}, data);
    }

    delete<T extends BaseData, TY>(url: string, data: T, options?: RequestOptions) {
        return this.request<T, TY>(url, {...options, method: METHODS.DELETE}, data);
    }

    // PUT, POST, DELETE

    // options:
    // headers — obj
    // data — obj

    public async request<T extends BaseData, TY>(url: string, options: RequestOptions, data: T) {
        return new Promise<TY>((resolve, reject) => {
            if (!options.method) {
                reject('No method');
                return;
            }

            const xhr = new XMLHttpRequest();
            const isGet = options.method === METHODS.GET;

            // queryStringify превращает data в ?name=dsfd&pass=sdf
            xhr.open(options.method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
            xhr.withCredentials = true;

            if (options.headers) {
                Object.keys(options.headers).forEach((key) => {
                    xhr.setRequestHeader(key, options.headers![key]);
                });
            }

            xhr.onload = function () {
                if (xhr.status === 200) {
                    let responseText;

                    if (!options.notNeedJsonTransform) {
                        responseText = JSON.parse(xhr.responseText);
                    } else {
                        responseText = {}
                    }

                    resolve(responseText);
                }
                else {
                    reject();
                }
            };

            xhr.onabort = reject;
            xhr.onerror = reject;

            if (options.timeout) {
                xhr.timeout = options.timeout;
            }
            xhr.ontimeout = reject;

            if (isGet || !data) {
                xhr.send();
            } else {
                // @ts-ignore
                xhr.send(JSON.stringify(data));
            }
        });
    };
}

export default new HTTPTransport();
