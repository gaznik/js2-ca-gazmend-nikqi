import { API_BASE_URL_SOCIAL } from "../apiURL.mjs";
import { fetchToken } from "../fetchToken.mjs";

const action = "/posts";

export async function deletePost(id) {
    const deletePostURL = `${API_BASE_URL_SOCIAL}${action}/${id}`;
    
    const response = await fetchToken(deletePostURL, {
        method: "delete"
    });

    return await response.json();
};
