import { API_BASE_URL_SOCIAL } from "../apiURL.mjs";
import * as storage from "../../localStorage.mjs";


const action = "/auth/login";


export async function login(profile){
    const loginURL = API_BASE_URL_SOCIAL + action;
    
    const response = await fetch(loginURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "post",
        body: JSON.stringify(profile)
    })

    const results = await response.json();
    

    storage.save("token", results.accessToken);
    alert("Login successful");
    storage.save("profile", results);
};
