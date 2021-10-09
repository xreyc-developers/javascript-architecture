// COMPONENTS
import { menuItems } from "../../modules/component/headerMenu.js";

const CONTACT = (() => {
    document.addEventListener('DOMContentLoaded', init);

    function init(){
        document.querySelector('header').innerHTML += menuItems(false);
        addEventListeners();
    }

    function addEventListeners() {}

})();