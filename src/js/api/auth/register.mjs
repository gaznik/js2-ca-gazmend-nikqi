import { API_BASE_URL } from "../api_variables.mjs";
import { API_BASE_URL_SOCIAL } from "../api_variables.mjs";

const action = "/auth/register";

export async function register(profile){
    const registerURL = API_BASE_URL_SOCIAL + action;
    
    const response = await fetch(registerURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "post",
        body: JSON.stringify(profile)
    })

    const results = await response.json()
    console.log(results)
}