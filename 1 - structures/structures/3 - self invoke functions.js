// SELF INVOKE FUNCTION

/*
SAMPLE1:
function A() {
    console.log('Hello')
}
A()

SAMPLE2:
const a = function A() {
    console.log('Hello')
}
a()

SAMPLE3:
(function A() {
    console.log('Hello')
})()
*/

const APP = (() => {
    document.addEventListener('DOMContentLoaded', init);

    const a = 'Hello';

    function init() {
        addEventListeners();
        getData(1,afterFetch);
    }
    
    function addEventListeners() {
        const btn = document.querySelector('button');
        btn.addEventListener('click', () => {
            getData(3,afterFetch);
        })
    }
    
    function getData(id,cb) {
        const firebaseUser = [
            { id: 0, username: "xreyc1" },
            { id: 1, username: "xreyc2" },
            { id: 2, username: "xreyc3" },
            { id: 3, username: "xreyc4" }
        ]
        cb(firebaseUser[id])
    }
    
    function afterFetch(user) {
        document.querySelector('#A').innerHTML = user.username;
    }

    return {
        a,
        getData,
        afterFetch
    }
})()


const APP2 = (() => {
    document.addEventListener('DOMContentLoaded', init);

    const a = 'Hello';

    function init() {
        addEventListeners();
        getData(1,afterFetch);
    }
    
    function addEventListeners() {
        const btn = document.querySelector('button');
        btn.addEventListener('click', () => {
            getData(3,afterFetch);
        })
    }
    
    function getData(id,cb) {
        const firebaseUser = [
            { id: 0, username: "xreyc1" },
            { id: 1, username: "xreyc2" },
            { id: 2, username: "xreyc3" },
            { id: 3, username: "xreyc4" }
        ]
        cb(firebaseUser[id])
    }
    
    function afterFetch(user) {
        document.querySelector('#A').innerHTML = user.username;
    }

    return {
        a,
        getData,
        afterFetch
    }
})()

