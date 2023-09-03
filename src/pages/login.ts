// First Attempt: Crete the components using pure javascript
// It works, but you have to create a lot of things, so I will recreate this.

import { inputText } from "../components/input";
import { login, resetResetLabel } from "../data/dummyJson";
import { PushState } from "../utilities/pushState";
const mainContainer: HTMLDivElement = document.createElement("div");

const ImageContainer: HTMLDivElement = document.createElement("div");
const Image: HTMLImageElement = document.createElement("img");
ImageContainer.appendChild(Image);
ImageContainer.classList.add("imageContainer");
const nodeString = `<h1>Simple Vanilla Login</h1>
<h4>Created using pure vanilla Typescript and CSS</h4>
<p> The first version of this simple webapp used Supabase, however, the database project needed to be taken down to give way to more major projects. It now uses dummyjson api for the users database. Here are some of the few that you can use.</p>
<table border="1">
<tr>
  <th>Username</th>
  <th>Password</th>
</tr>
<tr>
  <td>atuny0</td>
  <td>9uQFF1Lh</td>
</tr>
<tr>
  <td>hbingley1</td>
  <td>CQutx25i8r</td>
</tr>
<tr>
  <td>rshawe2</td>
  <td>OWsTbMUgFc</td>
</tr>
<tr>
  <td>yraigatt3</td>
  <td>sRQxjPfdS</td>
</tr>
<tr>
  <td>kmeus4</td>
  <td>aUTdmmmbH</td>
</tr>
</table>
`;
ImageContainer.insertAdjacentHTML("beforeend", nodeString);

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
document.addEventListener("DOMContentLoaded", function () {
    try {
        const loginForm = document.getElementById("loginForm");
        loginForm!.onsubmit = login;
    } catch {}
});

userNameInput.onclick = resetResetLabel;
passwordInput.onclick = resetResetLabel;
export { mainContainer as Login };
