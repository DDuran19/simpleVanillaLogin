import { inputText } from "../components/input";
import { register, resetResetLabel } from "../data/dataHandler";
import { generateLorem1P } from "../utilities/loremIpsum";
import { PushState } from "../utilities/pushState";

const mainContainer: HTMLDivElement = document.createElement("div");

const ImageContainer: HTMLDivElement = document.createElement("div");
const Image: HTMLImageElement = document.createElement("img");
ImageContainer.appendChild(Image);
ImageContainer.classList.add("imageContainer");
generateLorem1P(ImageContainer);

const registerContainer: HTMLDivElement = document.createElement("div");
const registerForm: HTMLFormElement = document.createElement("form");
const myLogo: HTMLImageElement = document.createElement("img");
myLogo.src =
    "https://raw.githubusercontent.com/DDuran19/simpleVanillaLogin/main/public/denvieLogo.png";
myLogo.width = 100;
myLogo.height = 100;
const alreadyHasAccount: HTMLAnchorElement = document.createElement("a");
alreadyHasAccount.textContent = `Already have an account?`;
alreadyHasAccount.setAttribute("href", `/`);
alreadyHasAccount.addEventListener("click", (e) => {
    PushState(e, alreadyHasAccount);
});

const usernameInput = inputText(registerForm, "userNameInput", {
    labelText: "Username: ",
    placeholder: "Enter your username",
    required: true,
    noLabel: true,
});
const descriptionInput = inputText(registerForm, "descriptionInput", {
    labelText: "Description: ",
    placeholder: "Describe yourself",
    required: true,
    noLabel: true,
});
const passwordInput = inputText(registerForm, "passwordInput", {
    labelText: "Password: ",
    type: "password",
    placeholder: "Enter your password",
    required: true,
    noLabel: true,
});
const confirmPasswordInput = inputText(registerForm, "confirmPasswordInput", {
    labelText: "Confirm Password: ",
    type: "password",
    placeholder: "Confirm your password",
    required: true,
    noLabel: true,
});

export const registerResultLabel = document.createElement("p");
registerForm.appendChild(registerResultLabel);
inputText(registerForm, "submitButton", {
    type: "submit",
    value: "Register",
    inputClassName: "btn btn-primary",
});
registerForm.appendChild(alreadyHasAccount);
registerContainer.appendChild(myLogo);
registerContainer.appendChild(registerForm);

// Ids
mainContainer.setAttribute("id", "mainContainer");
ImageContainer.setAttribute("id", "ImageContainer");
registerContainer.setAttribute("id", "registerContainer");
registerForm.setAttribute("id", "registerForm");
registerResultLabel.setAttribute("id", "resultLabel");

// Classlists
const maincontainerClasses: string[] = ["container", "main", "shadow"];
const registerContainerClasses: string[] = ["container", "register"];

// Classes
mainContainer.classList.add(...maincontainerClasses);
registerContainer.classList.add(...registerContainerClasses);

// Add Children to Parent
mainContainer.appendChild(ImageContainer);
mainContainer.appendChild(registerContainer);

//Event Listeners
registerForm.onsubmit = register;
usernameInput.onclick = resetResetLabel;
descriptionInput.onclick = resetResetLabel;
passwordInput.onclick = resetResetLabel;
confirmPasswordInput.onclick = resetResetLabel;
export { mainContainer as Register };
