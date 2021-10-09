import { checkAuthentication } from '../../modules/firebase/auth/firebase-check-auth.js';
import { getCurrentUser } from '../../modules/firebase/profile/firebase-profile.js';
// COMPONENTS
import { menuItems } from "../../modules/component/headerMenu.js";

const APP = (() => {
    document.addEventListener('DOMContentLoaded', init);

    function init(){
        checkAuthentication(); // CHECK IF USER IS AUTHETICATED
        document.querySelector('header').innerHTML += menuItems(true);
        addEventListeners();
        getProfile(getProfileAfterFetch);
    }

    async function getProfile(cb) {
        const user = await getCurrentUser()
        cb(user);
    }

    function getProfileAfterFetch(user) {
        document.querySelector('#profile_name').innerHTML = user.name;
        document.querySelector('#profile_email').innerHTML = user.email;
        document.querySelector('#profile_phone').innerHTML = user.phone_number;
        document.querySelector('#profile_address').innerHTML = user.address;
    }

    // INTERACTIONS
    function addEventListeners() {

    }

})();