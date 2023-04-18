import { remove } from "../localStorage.mjs";

const logout = document.getElementById("logout-btn");

logout.addEventListener("click", () => {
    remove();
});


