function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "Call us at 111-222-3333";

    const address = document.createElement("p");
    address.textContent = "Find us at The Tents #99, Fort Collins, CO";

    const email = document.createElement("p");
    email.textContent = "Email us at ripvanwinkle@resty.com";

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(email);

    return contact;
}

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;