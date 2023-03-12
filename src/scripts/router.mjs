import * as listeners from "./eventHandlers/index.mjs";



const path = location.pathname;

switch (path){
    case '/login.html':
        listeners.loginEventListener()
        break;
    case '/register.html':
        listeners.setRegisterFormListener()
        break;
    case '/post/create.html/':
        listeners.createPostEventListener()
        break;
    case '/post/edit/':
        listeners.updatePostEventListener()
        break;
    case '/profile/edit/':
        listeners.updateProfileListener()
        break;
};

