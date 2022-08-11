export default function createContacts(append) {
  append.innerHTML = "";
  let contactsContainer = document.createElement("div");
  contactsContainer.classList.add("contacts-container");
  createContact(contactsContainer, "../docs/img/contacts/telephone.png", "Phone: +351 923 123 456");
  createContact(contactsContainer, "../docs/img/contacts/email.png", "extremamenteReal@realissimomail.com");
  append.appendChild(contactsContainer);
}

function createContact(append, img, contact) {
  let holder = document.createElement("div");
  holder.classList.add("contact-container");
  let contactImage = document.createElement("img");
  contactImage.src = img;
  contactImage.classList.add("contact-icon");
  let contactText = document.createElement("p");
  contactText.innerHTML = contact;
  holder.append(contactImage, contactText);
  append.appendChild(holder);
}
