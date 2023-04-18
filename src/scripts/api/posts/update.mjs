import { API_BASE_URL_SOCIAL } from "../apiURL.mjs";
import { fetchToken } from "../fetchToken.mjs";

const action = "/posts";

export async function updatePost(postData) {
    const updatePostURL = `${API_BASE_URL_SOCIAL}${action}/${postData.id}`;
    
    const response = await fetchToken(updatePostURL, {
        method: "put",
        body: JSON.stringify(postData)
    });

    return await response.json();
};
