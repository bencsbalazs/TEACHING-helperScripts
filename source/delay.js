// This will run a function after a given number of miliseconds.
// Eg.: If U wanna wait 2 seconsd, the value is 2000.

const delay = (fn, ms) => {
    let timer = 0;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(fn.bind(this, ...args), ms || 0);
    };
};