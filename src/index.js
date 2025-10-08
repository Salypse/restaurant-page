import "./styles.css";
import { loadHome } from "./js/load-home";
import { loadAbout } from "./js/load-about";
import { loadMenu } from "./js/load-menu";

export const contentDiv = document.querySelector("#content");

const restaurantDisplay = (function () {
    const homeButton = document.querySelector("#home-button");
    const menuButton = document.querySelector("#menu-button");
    const aboutButton = document.querySelector("#about-button");

    homeButton.addEventListener("click", loadHome);
    menuButton.addEventListener("click", loadMenu);
    aboutButton.addEventListener("click", loadAbout);

    loadHome();
})();


