import { contentDiv } from "../index.js";
import { menuItems } from "./menu/menu-items.js";

export function loadMenu() {
    contentDiv.innerHTML = "";

    const menu = document.createElement("div")
    menu.id = "menu"
    contentDiv.append(menu)

    const menuHeader = document.createElement("h1")
    menuHeader.textContent = "Menu"
    menu.append(menuHeader)

    menuItems.forEach(item => {
        let newItem = document.createElement("div")
        newItem.classList.add("menu-item")
        
        let itemName = document.createElement("h1")
        itemName.textContent = item.name
        itemName.classList.add("menu-item-name")
        newItem.append(itemName)

        let itemPrice = document.createElement("p")
        itemPrice.textContent = `Price: ${item.price}`
        itemPrice.classList.add("menu-item-price")
        newItem.append(itemPrice)

        let itemDescription = document.createElement("p");
        itemDescription.textContent = item.description;
        itemDescription.classList.add("menu-item-description")
        newItem.append(itemDescription)

        menu.append(newItem)
    })
}