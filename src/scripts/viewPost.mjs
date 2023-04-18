
import { renderPostTemplate } from "./templates/post.mjs";
import * as postMethods from "./api/posts/index.mjs";

async function viewPost(){
    const posts = await postMethods.readPosts();
    const post = posts[2];
    const container = document.querySelector("#post");
    renderPostTemplate(post, container);
    
};

viewPost();