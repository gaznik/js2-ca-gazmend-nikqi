import {setRegisterFormListener} from "./event_handlers/register.mjs";
import {setLoginFormListener} from "./event_handlers/login.mjs";

const path = location.pathname;

if(path === '/profile/login/index.html'){
    setLoginFormListener()
}else if(path === '/profile/register/'){
    setRegisterFormListener()
}