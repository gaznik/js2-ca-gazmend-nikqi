import {login} from "../api/auth/login.mjs";

export function loginEventListener(){
    const form = document.querySelector("#login");

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());


        login(profile);
    });
}
