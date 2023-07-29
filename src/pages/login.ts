// First Attempt: Crete the components using pure javascript
// It works, but you have to create a lot of things, so I will recreate this.

import { inputText } from "../components/input";
import { RepositoryPathName } from "../types/constants";
import { generateLorem1P } from "../utilities/loremIpsum";
import { handleNavigation } from "../utilities/routing";
const mainContainer: HTMLDivElement = document.createElement("div");

const ImageContainer: HTMLDivElement = document.createElement("div");
const Image: HTMLImageElement = document.createElement("img");
ImageContainer.appendChild(Image);
ImageContainer.classList.add("imageContainer");
generateLorem1P(ImageContainer);

const loginContainer: HTMLDivElement = document.createElement("div");
export const loginForm: HTMLFormElement = document.createElement("form");

const myLogo: HTMLImageElement = document.createElement("img");
myLogo.src = "../denvieLogo.png";
myLogo.width = 100;
myLogo.height = 100;

const registerNowLabel: HTMLAnchorElement = document.createElement("a");
registerNowLabel.textContent = `Don't have an account? \nRegister now!`;
registerNowLabel.setAttribute("href", `/Register`);
registerNowLabel.addEventListener("click", (e) => {
    e.preventDefault();
    const href = registerNowLabel.getAttribute("href") as string;
    let newHref: string = href.replace(`${RepositoryPathName}`, "");
    console.log("BEFORE: ", newHref);
    newHref = `/${RepositoryPathName}${newHref}`;
    console.log("AFTER: ", newHref);
    window.history.pushState("", "", newHref);
    handleNavigation();
});

inputText(loginForm, "userNameInput", {
    labelText: "Username: ",
    placeholder: "Enter your username",
    required: true,
    noLabel: true,
});
inputText(loginForm, "passwordInput", {
    labelText: "Password: ",
    type: "password",
    placeholder: "Enter your password",
    required: true,
    noLabel: true,
});
loginForm.appendChild(registerNowLabel);

inputText(loginForm, "submitButton", {
    type: "submit",
    value: "Login",
    inputClassName: "btn btn-primary",
});

loginContainer.appendChild(myLogo);
loginContainer.appendChild(loginForm);

// Ids
mainContainer.setAttribute("id", "mainContainer");
ImageContainer.setAttribute("id", "ImageContainer");
loginContainer.setAttribute("id", "loginContainer");
loginForm.setAttribute("id", "loginForm");
registerNowLabel.setAttribute("id", "registerNowLabel");

// Classlists
const maincontainerClasses: string[] = ["container", "main", "shadow"];
const loginContainerClasses: string[] = ["container", "login"];

// Classes
mainContainer.classList.add(...maincontainerClasses);
loginContainer.classList.add(...loginContainerClasses);
loginForm.classList.add("loginForm");
registerNowLabel.classList.add("registerNowLabel");

// Add Children to Parent
mainContainer.appendChild(ImageContainer);
mainContainer.appendChild(loginContainer);

export { mainContainer as Login };
