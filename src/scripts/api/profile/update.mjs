import { API_BASE_URL_SOCIAL } from "../apiURL.mjs";
import { fetchToken } from "../fetchToken.mjs";

const action = "/profiles";

export async function updateProfile(profileData) {
    const updateProfileURL = `${API_BASE_URL_SOCIAL}${action}/${profileData.name}/media`;
    
    const response = await fetchToken(updateProfileURL, {
        method: "put",
        body: JSON.stringify(profileData)
    });

    return await response.json();
};
