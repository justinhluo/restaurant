function renderContactPage() {
    const content = document.getElementById("content");
    const title = document.createElement("div");
    title.textContent = "Contact Us!";
    title.classList.add("title");
    content.appendChild(title);

    const phone = document.createElement("div");
    phone.textContent = "Phone:";
    phone.classList.add("sub-heading");
    content.appendChild(phone);
    const phoneNumber = document.createElement("div");
    phoneNumber.textContent = "1-510-230-2310";
    content.appendChild(phoneNumber);
    const email = document.createElement("div");
    email.textContent = "E-mail:";
    email.classList.add("sub-heading");
    content.appendChild(email);
    const emailAddress = document.createElement("div");
    emailAddress.textContent = "taqeria-familiar@gmail.com";
    content.appendChild(emailAddress);
    const address = document.createElement("div");
    address.textContent = "Address:";
    address.classList.add("sub-heading");
    content.appendChild(address);
    const addressName = document.createElement("div");
    addressName.textContent = "12301 Foothill Blvd, Hayward, 94043";
    content.appendChild(addressName);

}

export {renderContactPage}