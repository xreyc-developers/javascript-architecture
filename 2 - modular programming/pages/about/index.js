const ABOUT = (() => {
    document.addEventListener('DOMContentLoaded', init);

    function init(){
        addEventListeners();
        getData(currentShown,afterFetch)
    }

    // INTERACTIONS
    function addEventListeners() {}

    function getData(blogCount,cb) {}

    // INITIAL VIEW
    function afterFetch(blogs) {}

})();