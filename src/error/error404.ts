const errorText: string = "This page does not exist, are you lost?";
const errorContainer: HTMLDivElement = document.createElement("div");
const error404image: HTMLImageElement = document.createElement("img");
const homeButton: HTMLButtonElement = document.createElement("button");
error404image.src = "error404.svg";
error404image.alt = "Image representation of error 404 (Page not found).";
error404image.width = window.innerWidth - 50;
error404image.height = window.innerHeight - 50;
errorContainer.appendChild(error404image);
errorContainer.setAttribute("id", "mainContainer");
errorContainer.classList.add("errorContainer");
errorContainer.appendChild(homeButton);
homeButton.textContent = errorText;
//TODO: create function for this home button!!!

export { errorContainer };
