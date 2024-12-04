function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function debounce(fn, timeout = 300) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, timeout)
    }
}

function throttle(callback, limit) {
    let wait = false;
    return function () {
        if (!wait) {
            callback(arguments[0]);
            wait = true;
            setTimeout(() => {
                wait = false;
            }, limit);
        }
    }
}