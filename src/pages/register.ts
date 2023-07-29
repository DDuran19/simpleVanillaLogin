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

const registerContainer: HTMLDivElement = document.createElement("div");
const registerForm: HTMLFormElement = document.createElement("form");
const myLogo: HTMLImageElement = document.createElement("img");
myLogo.src = "../denvieLogo.png";
myLogo.width = 100;
myLogo.height = 100;
const alreadyHasAccount: HTMLAnchorElement = document.createElement("a");
alreadyHasAccount.textContent = `Already have an account?`;
alreadyHasAccount.setAttribute("href", `/`);
alreadyHasAccount.addEventListener("click", (e) => {
    e.preventDefault();
    const href = alreadyHasAccount.getAttribute("href") as string;
    let newHref: string = href.replace(`${RepositoryPathName}`, "");
    newHref = `/${RepositoryPathName}${newHref}`;
    window.history.pushState("", "", newHref);
    handleNavigation();
});

inputText(registerForm, "userNameInput", {
    labelText: "Username: ",
    placeholder: "Enter your username",
    required: true,
    noLabel: true,
});
inputText(registerForm, "descriptionInput", {
    labelText: "Description: ",
    placeholder: "Describe yourself",
    required: true,
    noLabel: true,
});
inputText(registerForm, "passwordInput", {
    labelText: "Password: ",
    type: "password",
    placeholder: "Enter your password",
    required: true,
    noLabel: true,
});
inputText(registerForm, "confirmPasswordInput", {
    labelText: "Confirm Password: ",
    type: "password",
    placeholder: "Confirm your password",
    required: true,
    noLabel: true,
});

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

// Classlists
const maincontainerClasses: string[] = ["container", "main", "shadow"];
const registerContainerClasses: string[] = ["container", "register"];

// Classes
mainContainer.classList.add(...maincontainerClasses);
registerContainer.classList.add(...registerContainerClasses);

// Add Children to Parent
mainContainer.appendChild(ImageContainer);
mainContainer.appendChild(registerContainer);
export { mainContainer as Register };
