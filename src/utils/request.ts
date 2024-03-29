export enum METHODS {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE',
}

function queryStringify(data: Record<string, any> = {}) {
    if (typeof data !== 'object') {
        throw new Error('Data must be object');
    }
    const keys = Object.keys(data);

    return keys.reduce((result, key, index) => {
        return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
    }, '?');
}


export interface optionsValues {
    headers?: Record<string, string>;
    method?: METHODS;
    data?: Record<string, any>;
    timeout?: number;
}

class HTTPTransport {
    get = (url: string, options: optionsValues = {}) => {
        return this.request(url, {...options, method: METHODS.GET}, options.timeout);
    };
    put = (url: string, options: optionsValues = {}) => {
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    }
    post = (url: string, options: optionsValues = {}) => {
        return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    }
    delete = (url: string, options: optionsValues = {}) => {
        return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    }

    // options:
    // headers — obj
    // data — obj

    request = (url: string, options: optionsValues, timeout = 5000) => {
        const {headers = {}, method, data} = options;
        return new Promise(function (resolve, reject) {
            if (!method) {
                reject('No method');
                return;
            }

            const xhr = new XMLHttpRequest();
            const isGet = method === METHODS.GET;

            xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

            Object.keys(headers).forEach((key) => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.onload = function () {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;

            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (isGet || !data) {
                xhr.send();
            } else {
                // @ts-ignore
                xhr.send(data);
            }
        });
    };
}
