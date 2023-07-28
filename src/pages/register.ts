import { inputText } from "../components/input";

const mainContainer: HTMLDivElement = document.createElement("div");

const ImageContainer: HTMLDivElement = document.createElement("div");
const Image: HTMLImageElement = document.createElement("img");
ImageContainer.appendChild(Image);
ImageContainer.classList.add("imageContainer");

const loginContainer: HTMLDivElement = document.createElement("div");
const registerForm: HTMLFormElement = document.createElement("form");
const myLogo: HTMLImageElement = document.createElement("img");
myLogo.src = "denvieLogo.png";
myLogo.width = 100;
myLogo.height = 100;

inputText(registerForm, "userNameInput", {
    labelText: "Username: ",
    placeholder: "Enter your username",
    required: true,
});
inputText(registerForm, "passwordInput", {
    labelText: "Password: ",
    type: "password",
    placeholder: "Enter your password",
    required: true,
});
inputText(registerForm, "confirmPasswordInput", {
    labelText: "Confirm Password: ",
    type: "password",
    placeholder: "Confirm your password",
    required: true,
});

inputText(registerForm, "submitButton", {
    type: "submit",
    value: "Register",
    inputClassName: "btn btn-primary",
});

loginContainer.appendChild(myLogo);
loginContainer.appendChild(registerForm);

// Ids
mainContainer.setAttribute("id", "mainContainer");
ImageContainer.setAttribute("id", "ImageContainer");
loginContainer.setAttribute("id", "loginContainer");

// Classlists
const maincontainerClasses: string[] = ["container", "main", "shadow"];
const loginContainerClasses: string[] = ["container", "login"];

// Classes
mainContainer.classList.add(...maincontainerClasses);
loginContainer.classList.add(...loginContainerClasses);

// Add Children to Parent
mainContainer.appendChild(ImageContainer);
mainContainer.appendChild(loginContainer);
export { mainContainer as Register };
