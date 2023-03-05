import { API_BASE_URL_SOCIAL } from "../api_variables.mjs";
import * as storage from "../../storage/index.mjs";

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
    console.log(results);

    storage.save("token", results.accessToken);
    alert("Login successfull");
    storage.save("profile", results);
};



