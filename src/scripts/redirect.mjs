import { userIsLoggedIn } from "./api/userIsLoggedIn.mjs";


    if (userIsLoggedIn()) {
    window.location.pathname = '/post/index.html';
    } else {
    window.location.pathname = '/login.html';
    }
