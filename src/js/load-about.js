import { contentDiv } from "../index.js";

export function loadAbout() {
    contentDiv.innerHTML = ""

    let about = document.createElement("div")
    about.id = "about"
    contentDiv.append(about)

    let aboutHeader = document.createElement("h1")
    aboutHeader.textContent = "About Our Restaurant"
    about.append(aboutHeader)

    /* Displays location information on about page */
    let location = document.createElement("div")
    location.classList.add("location");
    about.append(location)

    let locationHeader = document.createElement("h1")
    locationHeader.textContent = "Locations"
    location.append(locationHeader)

    let locationText = document.createElement("p")
    locationText.innerHTML = "742 Evergreen Terrace<br>3570 S Las Vegas Blvd<br>1435 Flower Street<br>More Coming Soon!"
    location.append(locationText)

    /* Displays Contact information on about page */  
    let contactInfo = document.createElement("div")
    contactInfo.classList.add("contact-info");
    about.append(contactInfo)

    let contactHeader = document.createElement("h1")
    contactHeader.textContent = "Contact Us"
    contactInfo.append(contactHeader)

    let contactText = document.createElement("p")
    contactText.innerHTML = "Hours: 12:30 Pm - 12:31 Pm (Monday-Tuesday)<br>Phone Number: (111)-867-5309<br>Email: veryRealEmail@gmail.com"
    contactInfo.append(contactText)

}