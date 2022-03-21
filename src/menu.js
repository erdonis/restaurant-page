import burgerImg from "./images/burger.jpg"
import pepPizzaImg from "./images/pepperoni-pizza.jpg"
import steakImg from "./images/steak.jpg"
import friesImg from "./images/fries.jpg"
import nuggetsImg from "./images/nuggets.jpg"
import pastaImg from "./images/pasta.jpg"
import spaghettiImg from "./images/spaghetti.jpg"
import saladImg from "./images/salad.jpg"

let loadMenu = function () {
    let content = document.querySelector("#content");
    let footer = document.querySelector(".footer");

    let menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-loader");
    content.insertBefore(menuContainer, footer);

    let mainh2 = document.createElement("h1");
    mainh2.textContent = "Menu";
    menuContainer.appendChild(mainh2);

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("menu-content");
    menuContainer.appendChild(mainDiv);


    let firstItem = document.createElement("div");
    mainDiv.appendChild(firstItem);
    let burger = new Image();
    burger.src = burgerImg;
    firstItem.appendChild(burger);
    let firstText = document.createElement("div");
    firstItem.appendChild(firstText);
    let firstTitle = document.createElement("h2");
    firstTitle.textContent = "Hamburger";
    firstText.appendChild(firstTitle);
    let burgerTxt = document.createElement("h5");
    burgerTxt.textContent = "(meat loaf, pickels, cheese, bacon)";
    firstText.appendChild(burgerTxt);

    let secondItem = document.createElement("div");
    mainDiv.appendChild(secondItem);
    let pepPizza = new Image();
    pepPizza.src = pepPizzaImg;
    secondItem.appendChild(pepPizza);
    let secondText = document.createElement("div");
    secondItem.appendChild(secondText);
    let secondTitle = document.createElement("h2");
    secondTitle.textContent = "Home Pizza";
    secondText.appendChild(secondTitle);
    let pepPizzaTxt = document.createElement("h5");
    pepPizzaTxt.textContent = "(pepperoni, tomato sauce, cheese, mushrooms, vegetables)";
    secondText.appendChild(pepPizzaTxt);

    let thirdItem = document.createElement("div");
    mainDiv.appendChild(thirdItem);
    let steak = new Image();
    steak.src = steakImg;
    thirdItem.appendChild(steak);
    let thirdText = document.createElement("div");
    thirdItem.appendChild(thirdText);
    let thirdTitle = document.createElement("h2");
    thirdTitle.textContent = "Steak";
    thirdText.appendChild(thirdTitle);
    let steakTxt = document.createElement("h5");
    steakTxt.textContent = "(roasted beef, fries)";
    thirdText.appendChild(steakTxt);


    let fourthItem = document.createElement("div");
    mainDiv.appendChild(fourthItem);
    let fries = new Image();
    fries.src = friesImg;
    fourthItem.appendChild(fries);
    let fourthText = document.createElement("div");
    fourthItem.appendChild(fourthText);
    let fourthTitle = document.createElement("h2");
    fourthTitle.textContent = "Fries";
    fourthText.appendChild(fourthTitle);
    let friesTxt = document.createElement("h5");
    friesTxt.textContent = "(potato fries, sauce)";
    fourthText.appendChild(friesTxt);

    let fifthItem = document.createElement("div");
    mainDiv.appendChild(fifthItem);
    let nuggets = new Image();
    nuggets.src = nuggetsImg;
    fifthItem.appendChild(nuggets);
    let fifthText = document.createElement("div");
    fifthItem.appendChild(fifthText);
    let fifthTitle = document.createElement("h2");
    fifthTitle.textContent = "Nuggets";
    fifthText.appendChild(fifthTitle);
    let nuggetsTxt = document.createElement("h5");
    nuggetsTxt.textContent = "(chicken nuggets, sauce)";
    fifthText.appendChild(nuggetsTxt);

    let sixthItem = document.createElement("div");
    mainDiv.appendChild(sixthItem);
    let pasta = new Image();
    pasta.src = pastaImg;
    sixthItem.appendChild(pasta);
    let sixthText = document.createElement("div");
    sixthItem.appendChild(sixthText);
    let sixthTitle = document.createElement("h2");
    sixthTitle.textContent = "Pasta";
    sixthText.appendChild(sixthTitle);
    let pastaTxt = document.createElement("h5");
    pastaTxt.textContent = "(pasta, sauce, mushrooms)";
    sixthText.appendChild(pastaTxt);

    let seventhItem = document.createElement("div");
    mainDiv.appendChild(seventhItem);
    let spaghetti = new Image();
    spaghetti.src = spaghettiImg;
    seventhItem.appendChild(spaghetti);
    let seventhText = document.createElement("div");
    seventhItem.appendChild(seventhText);
    let seventhTitle = document.createElement("h2");
    seventhTitle.textContent = "Spaghetti";
    seventhText.appendChild(seventhTitle);
    let spaghettiTxt = document.createElement("h5");
    spaghettiTxt.textContent = "(Spaghetti, sauce, mushrooms, tomatoes)";
    seventhText.appendChild(spaghettiTxt);

    let eigthItem = document.createElement("div");
    mainDiv.appendChild(eigthItem);
    let salad = new Image();
    salad.src = saladImg;
    eigthItem.appendChild(salad);
    let eigthText = document.createElement("div");
    eigthItem.appendChild(eigthText);
    let eigthTitle = document.createElement("h2");
    eigthTitle.textContent = "Salad";
    eigthText.appendChild(eigthTitle);
    let saladTxt = document.createElement("h5");
    saladTxt.textContent = "(tomatoes, lettuce, cheese, olives, sauce)";
    eigthText.appendChild(saladTxt);
}

export default loadMenu