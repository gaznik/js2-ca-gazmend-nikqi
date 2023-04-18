import { updateProfile } from "../api/profile/index.mjs";
import { readProfile } from "../api/profile/index.mjs";
import { load } from "../localStorage.mjs";

export async function updateProfileListener(){
    const form = document.querySelector("#editProfile");

    
    
    if (form){
        const { name, email } = load("profile");
        form.name.value = name;
        form.email.value = email;

        
        const profile = await readProfile(name);

        
        form.banner.value = profile.banner;
        form.avatar.value = profile.avatar;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());
        
        profile.name = name;
        profile.email = email;
        
        updateProfile(profile);
        });

    };
};

