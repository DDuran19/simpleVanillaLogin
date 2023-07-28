const mainContainer: HTMLDivElement = document.createElement('div');

const ImageContainer: HTMLDivElement = document.createElement('div');
const Image: HTMLImageElement = document.createElement('img');
ImageContainer.appendChild(Image);
ImageContainer.classList.add("imageContainer");

const loginContainer: HTMLDivElement = document.createElement('div');
const myLogo: HTMLImageElement = document.createElement('img');
myLogo.src = "denvieLogo.png";
myLogo.width = 100;
myLogo.height = 100;

const userNameInput: HTMLInputElement = document.createElement('input');
const passwordInput: HTMLInputElement = document.createElement('input');
userNameInput.setAttribute('type','text');
passwordInput.setAttribute('type','password');

const registerNowLabel: HTMLLabelElement = document.createElement('label');
registerNowLabel.textContent = `Don't have an account? \nRegister now!`;

const loginButton: HTMLButtonElement = document.createElement('button');
loginButton.textContent = "Login"

loginContainer.appendChild(myLogo);
loginContainer.appendChild(userNameInput);
loginContainer.appendChild(passwordInput);
loginContainer.appendChild(registerNowLabel);
loginContainer.appendChild(loginButton);


// Ids
ImageContainer.setAttribute("id","ImageContainer");
mainContainer.setAttribute("id","mainContainer");
loginContainer.setAttribute("id","loginContainer");
userNameInput.setAttribute("id","userNameInput");
passwordInput.setAttribute("id","passwordInput");
registerNowLabel.setAttribute("id","registerNowLabel");

// Classlists
const maincontainerClasses: string[] = ["container", "main", "shadow" ]
const loginContainerClasses: string[] = ["container", "login"]

// Classes
mainContainer.classList.add(...maincontainerClasses);
loginContainer.classList.add(...loginContainerClasses);
userNameInput.classList.add("userNameInput")
passwordInput.classList.add("passwordInput")
registerNowLabel.classList.add("registerNowLabel");
loginButton.classList.add("btn");
loginButton.classList.add("btn-primary");

// Add Children to Parent
mainContainer.appendChild(ImageContainer);
mainContainer.appendChild(loginContainer);
export { mainContainer as Login }