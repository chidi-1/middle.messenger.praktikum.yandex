const METHODS = {
    GET: 'GET',
    PUT: 'PUT',
    POST:'POST',
    DELETE:'DELETE',
};

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data) {
    // Можно делать трансформацию GET-параметров в отдельной функции
}

class HTTPTransport {
    get = (url, options = {}) => {
        url = new URL(url);
        url.search = new URLSearchParams(params.data);
        url = url.toString();
        console.log(url.toString());

        return this.request(url, {...options, method: METHODS.GET}, options.timeout);

    };
    put=(url,ptions={})=>{return this.request(url, {...options, method: METHODS.PUT}, options.timeout);}
    post=(url,options={})=>{return this.request(url, {...options, method: METHODS.POST}, options.timeout);}
    delete=(url,options={})=>{return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);}
    // PUT, POST, DELETE

    // options:
    // headers — obj
    // data — obj
    request = (url, options, timeout = 5000) => {
        console.log(url)
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            for(let [k,v] in Object.entries( options.headers)){
                xhr.setRequestHeader(k,v);
            }
            xhr.open(options.method, url);

            xhr.onload  = function() {
                resolve(xhr); // Вызываем resolve и передаем text в качестве параметра
            };

            const handleError =function(){reject(xhr)}

            xhr.onabort = handleError;
            xhr.onerror = handleError;
            xhr.ontimeout = handleError;

            xhr.send();

        })
    };
}const METHODS = {
    GET: 'GET',
    PUT: 'PUT',
    POST:'POST',
    DELETE:'DELETE',
};

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data) {
    // Можно делать трансформацию GET-параметров в отдельной функции
}

class HTTPTransport {
    get = (url, options = {}) => {
        url = new URL(url);
        url.search = new URLSearchParams(params.data);
        url = url.toString();
        console.log(url.toString());

        return this.request(url, {...options, method: METHODS.GET}, options.timeout);

    };
    put=(url,ptions={})=>{return this.request(url, {...options, method: METHODS.PUT}, options.timeout);}
    post=(url,options={})=>{return this.request(url, {...options, method: METHODS.POST}, options.timeout);}
    delete=(url,options={})=>{return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);}
    // PUT, POST, DELETE

    // options:
    // headers — obj
    // data — obj
    request = (url, options, timeout = 5000) => {
        console.log(url)
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            for(let [k,v] in Object.entries( options.headers)){
                xhr.setRequestHeader(k,v);
            }
            xhr.open(options.method, url);

            xhr.onload  = function() {
                resolve(xhr); // Вызываем resolve и передаем text в качестве параметра
            };

            const handleError =function(){reject(xhr)}

            xhr.onabort = handleError;
            xhr.onerror = handleError;
            xhr.ontimeout = handleError;

            xhr.send();

        })
    };
}