import { firebase_blogs, firebase_blog } from "./modules/firebase/getBlog.js";

const APP = (() => {
    document.addEventListener('DOMContentLoaded', init);

    let currentShown = 3;

    function init(){
        addEventListeners();
        getData(currentShown,afterFetch)
    }

    // INTERACTIONS
    function addEventListeners() {
        // NAVIGATIONS
        document.querySelector('#navHome').addEventListener('click', () => {
            window.history.pushState( { title: "Home" }, "Home", url + "/" );
            window.location.replace(url + '/index.html')
        });
        document.querySelector('#navAbout').addEventListener('click', () => {
            window.history.pushState({ title: "About" }, "About", "/pages/about/")
            window.location.replace(url + '/pages/about/index.html')
        })
        document.querySelector('#navContact').addEventListener('click', () => {
            window.location.replace(url + '/pages/contact/')
        })
    }

    function getData(blogCount,cb) {}

    // INITIAL VIEW
    function afterFetch(blogs) {}

    return {
        getData,
        afterFetch
    }
})();

window.addEventListener('popstate', function(event) {
    history.back();
});