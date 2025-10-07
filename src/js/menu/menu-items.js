import caramelAppleImage from "../../images/menu/caramel-apple.jpg"
import chickenSandwichImage from "../../images/menu/chicken-sandwich.jpg"
import saladImage from "../../images/menu/salad.jpg"
import fruitImage from "../../images/menu/fruit-assortment.jpg"
import pizzaImage from "../../images/menu/pizza.jpg"
import cookieImage from "../../images/menu/chocalate-chip-cookie.jpg"

const newMenuItem = function(name, price, description, imgSrc) {
    return {name, price, description, imgSrc}
}

export let menuItems = [
    newMenuItem("Seasonal Caramel Apple", "$4.99", "Dont order this, you might not be alive tommorow if you do", caramelAppleImage),
    newMenuItem("Chicken Sandwhich", "$14.99", "It's definetly a sandwhich, whether its chicken is unknown", chickenSandwichImage),
    newMenuItem("Salad", "9.99", "This is a lame option for you to eat", saladImage),
    newMenuItem("Fruit Assortment", "$6.99", "Comes with Strawberries, Bananas, Grapes, and something resembling an Orange", fruitImage),
    newMenuItem("Pizza", "$12.99", "It's just a pizza", pizzaImage),
    newMenuItem("Chocalate Chip Cookie", "$2.99", "Looking at this menu do you really think those are chocalate chips?", cookieImage),
]