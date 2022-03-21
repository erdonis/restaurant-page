import phoneIcon from "./images/phone.png"
import mailIcon from "./images/mailbox.png"
import facebookIcon from "./images/facebook.png"
import instagramIcon from "./images/instagram.png"
import snapchatIcon from "./images/snapchat.png"

let loadContactPage = function() {
    let content = document.querySelector("#content");
    let footer = document.querySelector(".footer")
    
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("contact-page");
    content.insertBefore(mainDiv, footer);

    let firsth3 = document.createElement("h3");
    firsth3.textContent = "We are available from 7am - 10pm everyday. Call us or send an email to make a reservation."
    mainDiv.appendChild(firsth3);

    let phoneInfo = document.createElement("div");
    mainDiv.appendChild(phoneInfo)
    let phone = new Image();
    phone.src = phoneIcon;
    let phoneTxt = document.createElement("p");
    phoneTxt.textContent = "+1 756 23 54 222"
    phoneInfo.appendChild(phone)
    phoneInfo.appendChild(phoneTxt)

    let mailInfo = document.createElement("div");
    mainDiv.appendChild(mailInfo)
    let mail = new Image();
    mail.src = mailIcon;
    let mailTxt = document.createElement("p");
    mailTxt.textContent = "contact@mrmrsbun.com"
    mailInfo.appendChild(mail)
    mailInfo.appendChild(mailTxt)

    let secondh3 = document.createElement("h3")
    secondh3.textContent = "You can also find us on Social Media:";
    mainDiv.appendChild(secondh3);

    let socialInfo = document.createElement("div");
    mainDiv.appendChild(socialInfo);
    socialInfo.classList.add("socialInfo");

    let facebook = new Image();
    facebook.src = facebookIcon;
    socialInfo.appendChild(facebook)

    let instagram = new Image();
    instagram.src = instagramIcon;
    socialInfo.appendChild(instagram);

    let snapchat = new Image();
    snapchat.src = snapchatIcon;
    socialInfo.appendChild(snapchat);

}

export default loadContactPage