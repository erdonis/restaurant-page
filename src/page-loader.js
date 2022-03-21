import img from "./images/food-background.jpg"
import logo from "./images/logo.png"

const loadPage = function (){
    let content = document.querySelector("#content");

    let header = document.createElement("div");
    content.appendChild(header);
    header.classList.add("header");

    let container = document.createElement("div");
    content.appendChild(container);
    container.classList.add("container");

    let footer = document.createElement("div");
    content.appendChild(footer);
    footer.classList.add("footer");

    let title = new Image();
    title.src = logo;
    title.classList.add("title")
    header.appendChild(title)

    let list = document.createElement("ul");
    header.appendChild(list);
    let home = document.createElement("li");
    home.textContent = "HOME";
    list.appendChild(home);
    home.classList.add("home");
    home.style.cssText = "border-bottom: solid 4px rgb(255, 187, 0); color: rgb(255, 187, 0);"

    let menu = document.createElement("li");
    menu.textContent = "MENU";
    list.appendChild(menu);
    menu.classList.add("menu");

    let contact = document.createElement("li");
    contact.textContent = "CONTACT";
    list.appendChild(contact);
    contact.classList.add("contact");

    let mainText = document.createElement("div");
    mainText.classList.add("mainText")
    container.appendChild(mainText);

    let mainH = document.createElement("h2")
    mainH.textContent = "Welcome"
    mainText.appendChild(mainH)
    let mainP = document.createElement("p");
    mainP.textContent = "Mr. and Mrs. Bun is a family restaurant dated 20 years ago.\
                        \ Everything on our menu is made with a lot of care and love.\
                        \ Make a reservation now and have the treat of your life.";
   
    let mainBtn = document.createElement("button");
    mainBtn.classList.add("discover-menu");
    mainBtn.textContent = "DISCOVER OUR MENU"

    
    mainText.appendChild(mainP)
    mainText.appendChild(mainBtn)

    let myImg = new Image();
    myImg.src = img;
    container.appendChild(myImg)


    let footerTxt = document.createElement("p");
    footerTxt.textContent = "Copyright @ Mr. & Mrs. Bun 2022"
    footer.appendChild(footerTxt)

    return {
        container,
        home,
        menu,
        contact,
        mainBtn
    }
}

export default loadPage

