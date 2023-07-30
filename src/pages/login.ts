// First Attempt: Crete the components using pure javascript
// It works, but you have to create a lot of things, so I will recreate this.

import { inputText } from "../components/input";
import { login, resetResetLabel } from "../data/dataHandler";
import { generateLorem1P } from "../utilities/loremIpsum";
import { PushState } from "../utilities/pushState";
const mainContainer: HTMLDivElement = document.createElement("div");

const ImageContainer: HTMLDivElement = document.createElement("div");
const Image: HTMLImageElement = document.createElement("img");
ImageContainer.appendChild(Image);
ImageContainer.classList.add("imageContainer");
generateLorem1P(ImageContainer);

const loginContainer: HTMLDivElement = document.createElement("div");
export const loginForm: HTMLFormElement = document.createElement("form");

const myLogo: HTMLImageElement = document.createElement("img");
myLogo.src =
    "https://raw.githubusercontent.com/DDuran19/simpleVanillaLogin/main/public/denvieLogo.png";
myLogo.width = 100;
myLogo.height = 100;

const registerNowLabel: HTMLAnchorElement = document.createElement("a");
registerNowLabel.textContent = `Don't have an account? \nRegister now!`;
registerNowLabel.setAttribute("href", `/Register`);
registerNowLabel.addEventListener("click", (e) => {
    PushState(e, registerNowLabel);
});

const userNameInput = inputText(loginForm, "userNameInput", {
    labelText: "Username: ",
    placeholder: "Enter your username",
    required: true,
    noLabel: true,
});
const passwordInput = inputText(loginForm, "passwordInput", {
    labelText: "Password: ",
    type: "password",
    placeholder: "Enter your password",
    required: true,
    noLabel: true,
});
loginForm.appendChild(registerNowLabel);

export const resultLabel = document.createElement("p");
loginForm.appendChild(resultLabel);
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
resultLabel.setAttribute("id", "resultLabel");

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

// Event Listeners
loginForm.onsubmit = login;
userNameInput.onclick = () => resetResetLabel(resultLabel);
passwordInput.onclick = () => resetResetLabel(resultLabel);
console.log("USERNAME INPUT: ", userNameInput);
export { mainContainer as Login };
