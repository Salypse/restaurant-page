import { contentDiv } from "../index.js";

export function loadHome() {
    contentDiv.innerHTML = ""

    let home = document.createElement("div")
    home.id = "home"
    contentDiv.append(home)

    let homeContentHeader = document.createElement("h1")
    homeContentHeader.textContent = "Restaurant"
    home.append(homeContentHeader)

    /*About food section on home page */
    let aboutFood = document.createElement("div")
    aboutFood.classList.add("food")
    home.append(aboutFood)
    
    let aboutFoodHeader = document.createElement("h1")
    aboutFoodHeader.textContent = "About Food"
    aboutFood.append(aboutFoodHeader)

    let aboutFoodText = document.createElement("p")
    aboutFoodText.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus deleniti dolor ipsum saepe id sequi qui necessitatibus. Veritatis repellat consequatur hic sunt, alias, amet nostrum sequi, praesentium deleniti perspiciatis doloribus."
    aboutFood.append(aboutFoodText)


    /*About service section on home page*/
    let service = document.createElement("div")
    service.classList.add("service")
    home.append(service)

    let serviceHeader = document.createElement("h1")
    serviceHeader.textContent = "Service"
    service.append(serviceHeader)

    let serviceText = document.createElement("p")
    serviceText.textContent = "Numquam est amet cumque, facilis aperiam, architecto in facere similique labore iusto repudiandae eligendi minima excepturi voluptas at dolores sequi quas magnam."
    service.append(serviceText)
}