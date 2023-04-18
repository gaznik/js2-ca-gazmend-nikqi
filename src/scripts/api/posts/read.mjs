import { API_BASE_URL_SOCIAL } from "../apiURL.mjs";
import { fetchToken } from "../fetchToken.mjs";

const action = "/posts";

export async function readPost(id) {
    const readPostURL = `${API_BASE_URL_SOCIAL}${action}/${id}`;
    
    const response = await fetchToken(readPostURL);

    return await response.json();
};

export async function readPosts() {
    const readPostURL = `${API_BASE_URL_SOCIAL}${action}`;
    
    const response = await fetchToken(readPostURL);

    return await response.json();
};
