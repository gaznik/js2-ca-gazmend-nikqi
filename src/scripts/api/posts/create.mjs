import { API_BASE_URL_SOCIAL } from "../apiURL.mjs";
import { fetchToken } from "../fetchToken.mjs";

const action = "/posts";

export async function createPost(postData) {
    const createPostURL = API_BASE_URL_SOCIAL + action;
    
    const response = await fetchToken(createPostURL, {
        method: "post",
        body: JSON.stringify(postData)
    });

    return await response.json();
};

