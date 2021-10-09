// NAMESPACED STRUCTURE
const a = 'hello'

const APP = {
    a: 'hello',
    init: () => {
        APP.a = 'Hi';
        APP.addEventListeners();
        APP.getData(1,APP.afterFetch);
    },
    addEventListeners: () => {
        const btn = document.querySelector('button');
        btn.addEventListener('click', () => {
            getData(3,afterFetch);
        })
    },
    getData: (id,cb) =>  {
        const firebaseUser = [
            { id: 0, username: "xreyc1" },
            { id: 1, username: "xreyc2" },
            { id: 2, username: "xreyc3" },
            { id: 3, username: "xreyc4" }
        ]
        cb(firebaseUser[id])
    },
    afterFetch: (user) => {
        document.querySelector('#A').innerHTML = user.username;
    }
}
document.addEventListener('DOMContentLoaded', APP.init());


const APP2 = {
    a: 'hello',
    init: () => {
        APP.a = 'Hi';
        APP.addEventListeners();
        APP.getData(1,APP.afterFetch);
    },
    addEventListeners: () => {
        const btn = document.querySelector('button');
        btn.addEventListener('click', () => {
            getData(3,afterFetch);
        })
    },
    getData: (id,cb) =>  {
        const firebaseUser = [
            { id: 0, username: "xreyc1" },
            { id: 1, username: "xreyc2" },
            { id: 2, username: "xreyc3" },
            { id: 3, username: "xreyc4" }
        ]
        cb(firebaseUser[id])
    },
    afterFetch: (user) => {
        document.querySelector('#A').innerHTML = user.username;
    }
}
document.addEventListener('DOMContentLoaded', APP2.init());