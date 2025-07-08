import "./styles.css";

import {renderHomePage} from "./home.js";
import {renderMenuPage} from "./menu.js";
import {renderContactPage} from "./contact.js";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");
const allButtons = document.querySelectorAll("nav button");
const content = document.getElementById("content");
renderHomePage();
homeBtn.classList.add("active-tab");

homeBtn.addEventListener("click", () => {
  if (homeBtn.classList.contains("active-tab")) return;
  content.innerHTML = "";
  allButtons.forEach(btn => btn.classList.remove("active-tab"));
  homeBtn.classList.add("active-tab");
  renderHomePage();
});
menuBtn.addEventListener("click", () => {
  if (menuBtn.classList.contains("active-tab")) return;
  content.innerHTML = "";
  allButtons.forEach(btn => btn.classList.remove("active-tab"));
  menuBtn.classList.add("active-tab");
  renderMenuPage();
});
contactBtn.addEventListener("click", () => {
  if (contactBtn.classList.contains("active-tab")) return;
  content.innerHTML = "";
  allButtons.forEach(btn => btn.classList.remove("active-tab"));
  contactBtn.classList.add("active-tab");
  renderContactPage();
});

