import loadPage from "./page-loader.js";
import loadMenu from "./menu.js";
import loadContactPage from "./contact.js";
import "./style.css";

loadPage()
loadMenu()
loadContactPage()

let menuBtn = document.querySelector(".menu");
let contactBtn = document.querySelector(".contact");
let homeBtn = document.querySelector(".home")

let menuLoader = document.querySelector(".menu-loader");
let contactPage = document.querySelector(".contact-page");
let container = document.querySelector(".container");

menuBtn.addEventListener("click", () => {
    container.style.display = "none";
    contactPage.style.display = "none";
    menuLoader.style.display = "flex";
    menuBtn.style.cssText = "border-bottom: solid 4px rgb(255, 187, 0); color: rgb(255, 187, 0);"
    homeBtn.style.cssText = "border-bottom: white; color: black;"
    contactBtn.style.cssText = "border-bottom: white; color: black;"
})

contactBtn.addEventListener("click", () => {
    container.style.display = "none";
    contactPage.style.display = "flex";
    menuLoader.style.display = "none";
    contactBtn.style.cssText = "border-bottom: solid 4px rgb(255, 187, 0); color: rgb(255, 187, 0);"
    homeBtn.style.cssText = "border-bottom: white; color: black;"
    menuBtn.style.cssText = "border-bottom: white; color: black;"
})

homeBtn.addEventListener("click", () => {
    container.style.display = "flex";
    contactPage.style.display = "none";
    menuLoader.style.display = "none";
    homeBtn.style.cssText = "border-bottom: solid 4px rgb(255, 187, 0); color: rgb(255, 187, 0);"
    menuBtn.style.cssText = "border-bottom: white; color: black;"
    contactBtn.style.cssText = "border-bottom: white; color: black;"
})

let title = document.querySelector(".title");
title.addEventListener("click", () => {
    container.style.display = "flex";
    contactPage.style.display = "none";
    menuLoader.style.display = "none";
    homeBtn.style.cssText = "border-bottom: solid 4px rgb(255, 187, 0); color: rgb(255, 187, 0);"
    menuBtn.style.cssText = "border-bottom: white; color: black;"
    contactBtn.style.cssText = "border-bottom: white; color: black;"
})

let discoverMenuBtn = document.querySelector(".discover-menu");
discoverMenuBtn.addEventListener("click", () => {
    container.style.display = "none";
    contactPage.style.display = "none";
    menuLoader.style.display = "flex";
    menuBtn.style.cssText = "border-bottom: solid 4px rgb(255, 187, 0); color: rgb(255, 187, 0);"
    homeBtn.style.cssText = "border-bottom: white; color: black;"
    contactBtn.style.cssText = "border-bottom: white; color: black;"
})