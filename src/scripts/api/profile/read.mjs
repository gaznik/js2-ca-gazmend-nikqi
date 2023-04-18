import { API_BASE_URL_SOCIAL } from "../apiURL.mjs";
import { fetchToken } from "../fetchToken.mjs";

const action = "/profiles";

export async function readProfile(name) {
    const readProfileURL = `${API_BASE_URL_SOCIAL}${action}/${name}`;
    
    const response = await fetchToken(readProfileURL);

    return await response.json();
};

export async function readProfiles() {
    const readProfileURL = `${API_BASE_URL_SOCIAL}${action}`;
    
    const response = await fetchToken(readProfileURL);

    return await response.json();
};
