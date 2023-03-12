import * as templates from "./templates/post.mjs";

import * as postMethods from "./api/posts/index.mjs";



async function postFeed(){
    const posts = await postMethods.readPosts();
  
    const container = document.querySelector("#post");
    
    templates.renderPostTemplates(posts, container);
};

postFeed();
