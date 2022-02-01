function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const bedImg = document.createElement("img");
    bedImg.src = "images/bed.jpg";
    bedImg.alt = "White bed";

    home.appendChild(createHeading("The Resty Restaurant"));
    home.appendChild(bedImg);
    home.appendChild(createParagraph(`The new hit craze in 
        restaurants - a place you can go to satisfy that sleepy 
        urge! Sleep sleep sleep sleep!`));

    return home;
}

function createHeading(text) {
    const heading = document.createElement("h1");
    heading.textContent = text;
    return heading;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;