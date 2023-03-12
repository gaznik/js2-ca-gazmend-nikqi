import { createPost } from "../api/posts/index.mjs";

export function createPostEventListener(){
    const form = document.querySelector("#createPost");

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const form = event.target;
        const formData = new FormData(form);
        const post = Object.fromEntries(formData.entries());


        createPost(post);
    });
};
