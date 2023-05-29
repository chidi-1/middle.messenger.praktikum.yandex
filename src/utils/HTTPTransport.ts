const METHODS = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    DELETE: 'DELETE',
};

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data = {}) {
    if (typeof data !== 'object') {
        throw new Error('Data must be object');
    }

    const keys = Object.keys(data);

    return keys.reduce((result, key, index) => {
        return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
    }, '?');
}


class HTTPTransport {
    get = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.GET}, options.timeout);

    };
    put = (url, options = {}) => {
        console.log(url, 'out')
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    }
    post = (url, options = {}) => {
        console.log(url, 'post')
        return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    }
    delete = (url, options = {}) => {
        console.log(url, 'dle')
        return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    }
    // PUT, POST, DELETE

    // options:
    // headers — obj
    // data — obj
    request = (url, options, timeout = 5000) => {
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


function fetchWithRetry(url, options) {

    let left = options.retries || 1;
    delete options.retries;
    if (left < 1) {
        left = 1
    }

    return new Promise((resolve, reject) => {
        let send = () => {
            return new HTTPTransport().get(url, options).then((xhr) => {
                resolve(xhr)
            }, (xhr) => {
                if (left <= 0) {
                    reject(xhr)
                } else {
                    left--;
                    send()
                }
            })
        }
        send()
    })
}
