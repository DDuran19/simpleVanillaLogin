import { PushState } from "../utilities/pushState";

const errorText: string = "This page does not exist, are you lost?";
const errorContainer: HTMLDivElement = document.createElement("div");
const error404image: HTMLImageElement = document.createElement("img");
error404image.src =
    "https://raw.githubusercontent.com/DDuran19/simpleVanillaLogin/main/public/error404.svg";
error404image.alt = "Image representation of error 404 (Page not found).";
// error404image.width = window.innerWidth * 0.8;
// error404image.height = window.innerHeight * 0.8;
errorContainer.setAttribute("id", "mainContainer");
errorContainer.classList.add("errorContainer");

const Home: HTMLAnchorElement = document.createElement("a");
Home.textContent = errorText;
Home.setAttribute("href", `/`);
Home.addEventListener("click", (e) => {
    PushState(e, Home);
});
errorContainer.appendChild(Home);
errorContainer.appendChild(error404image);

export { errorContainer };
