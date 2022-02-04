function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(createItem("Sleeping Bag",
        "Warm sleeping bag. One pillow."));

    menu.appendChild(createItem("Cot",
        "Small, single cot. One pillow."));

    menu.appendChild(createItem("Bed",
        "Double bed. Two pillows."));

    return menu;
}

function createItem(item, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("item");
    
    const itemName = document.createElement("h2");
    itemName.textContent = item;

    const itemDescription = document.createElement("p");
    itemDescription.textContent = description;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;