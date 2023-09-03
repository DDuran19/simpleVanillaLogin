import { resultLabel } from "../pages/login";

export async function checkIfUserNameExists(username: string) {
    return await fetch(
        `https://dummyjson.com/users/filter?key=username&value=${username}`
    ).then((res) => res.json());
}
export function resetButton(button: HTMLInputElement, text: string) {
    button.disabled = false;
    button.value = text;
}
export function resetResetLabel() {
    const label = document.getElementById("resultLabel");
    label!.innerText = "";
}

export const login = async (event: SubmitEvent) => {
    event.preventDefault();
    let isLoggedIn: boolean = false;
    const form = event.target as HTMLFormElement;
    const usernameInput = form.elements[0] as HTMLInputElement;
    const passwordInput = form.elements[1] as HTMLInputElement;
    const loginButton = form.elements[2] as HTMLInputElement;
    const username: string = usernameInput.value;
    const password: string = passwordInput.value;

    loginButton.disabled = true;
    loginButton.value = "Logging In ...";
    const user = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: `${username}`,
            password: `${password}`,
            // expiresInMins: 60, // optional
        }),
    }).then((res) => res.json());
    console.log(user);
    try {
        if (user.username === username) {
            isLoggedIn = true;
            resultLabel.innerText = "Successful Login!";
            sessionStorage.setItem("userDetails", JSON.stringify(user));
            window.location.href = "UserDetails";
        } else {
            throw new Error();
        }
    } catch (error) {
        resultLabel.innerText = `Invalid Credentials!`;
        console.log(error);
        loginButton.disabled = false;
    } finally {
        resetButton(loginButton, "Login");
    }
};
export const register = (event: SubmitEvent) => {
    event.preventDefault();
    // let isLoggedIn: boolean = false;
    const form = event.target as HTMLFormElement;
    const usernameInput = form.elements[0] as HTMLInputElement;
    const descriptionInput = form.elements[1] as HTMLInputElement;
    const passwordInput = form.elements[2] as HTMLInputElement;
    const confirmPasswordInput = form.elements[3] as HTMLInputElement;
    const registerButton = form.elements[4] as HTMLInputElement;

    const username: string = usernameInput.value;
    const password: string = passwordInput.value;
    const confirmPassword: string = confirmPasswordInput.value;
    const description: string = descriptionInput.value;
    const registerResultLabel = document.getElementById("resultLabel");

    if (password !== confirmPassword) {
        registerResultLabel!.innerText = "Passwords do not match!";
        return;
    }
    registerButton.disabled = true;
    registerButton.value = "Registering ...";
    checkIfUserNameExists(username).then((user) => {
        if (user.total > 0) {
            resetButton(registerButton, "Register");
            registerResultLabel!.innerText = "User already Exists!";
            return;
        }

        alert(`Registration successful for ${username}!`);
        alert(
            `I am using Dummy JSON as database here, we can not save on their server. kindly use of the existing user logins.`
        );
        window.location.href = "/";
    });
};
export const initializeFunctions: boolean = true;
