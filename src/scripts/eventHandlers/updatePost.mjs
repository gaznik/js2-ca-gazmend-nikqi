import { updatePost } from "../api/posts/index.mjs";
import { readPost } from "../api/posts/index.mjs";

export async function updatePostEventListener(){
    const form = document.querySelector("#editPost");
    const url = new URL(location.href);
    const id = url.searchParams.get("id");
    
    if (form){
        const post = await readPost(id);

        form.title.value = post.title;
        form.body.value = post.body;
        form.media.value = post.media;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const post = Object.fromEntries(formData.entries());
        post.id = id;
        

        updatePost(post);
        });

    };
};

