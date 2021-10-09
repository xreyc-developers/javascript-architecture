import { firebase_blogs, firebase_blog } from "./modules/firebase/getBlog.js";

const APP = (() => {
    document.addEventListener('DOMContentLoaded', init);

    let currentShown = 3;

    function init(){
        addEventListeners();
        getData(currentShown,afterFetch)
    }

    // INTERACTIONS
    function addEventListeners() {}

    function getData(blogCount,cb) {
    }

    // INITIAL VIEW
    function afterFetch(blogs) {
    }

})();