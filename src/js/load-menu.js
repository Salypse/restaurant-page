import { contentDiv } from "../index.js";
import { menuItems } from "./menu/menu-items.js";

export function loadMenu() {
    contentDiv.innerHTML = "";

    const menu = document.createElement("div")
    menu.id = "menu"
    contentDiv.append(menu)
}