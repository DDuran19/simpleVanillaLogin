import { createClient } from "@supabase/supabase-js";
import { Database } from "../supabase";
import { resultLabel } from "../pages/login";

const myKey: string = import.meta.env.VITE_MONGODBsimpleVanillaLoginAPI;

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    "https://haymvsaanqluueuvwbsk.supabase.co",
    myKey
);

export type User = Database["public"]["Tables"]["simpleVanillaLogin"]["Row"];

export async function checkIfUserNameExists(
    username: string
): Promise<User[] | null> {
    const { data, error } = await supabase
        .from("simpleVanillaLogin")
        .select("*")
        .eq("username", username);
    if (error) {
        alert(`Something Went wrong! ${error.message}`);
    }
    if (data) {
        // password;
        return data[0];
    }
    return null;
}

export async function addNewUser(
    usernameValue: string,
    passwordValue: string,
    descriptionValue: string
) {
    const { error } = await supabase.from("simpleVanillaLogin").insert({
        username: usernameValue,
        password: passwordValue,
        description: descriptionValue,
    });
    if (error) {
        return error;
    }
}

export function resetButton(button: HTMLInputElement, text: string) {
    button.disabled = false;
    button.value = text;
}
export function resetResetLabel() {
    const label = document.getElementById("resultLabel");
    label!.innerText = "";
}

export const login = (event: SubmitEvent) => {
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
    checkIfUserNameExists(username)
        .then((user: any) => {
            if (!user) {
                resultLabel.innerText = "No such user!";
                resetButton(loginButton, "Login");
                return;
            }
            const UserDetails = user;
            if (
                UserDetails.username === username &&
                UserDetails.password !== password
            ) {
                resultLabel.innerText = "Wrong Password!";
            }
            if (
                UserDetails.username === username &&
                UserDetails.password === password
            ) {
                isLoggedIn = true;
                resultLabel.innerText = "Successful Login!";
                window.location.href = "UserDetails";
            }
            resetButton(loginButton, "Login");
        })
        .catch((error) => {
            resultLabel.innerText = `Something went wrong!`;
            console.log(error);
            loginButton.disabled = false;
        });
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
        if (user) {
            resetButton(registerButton, "Register");
            registerResultLabel!.innerText = "User already Exists!";
            return;
        }
        addNewUser(username, password, description)
            .then(() => {
                resetButton(registerButton, "Register");
                window.location.href = "/";
                resetButton(registerButton, "Register");
                alert(`Registration successful for ${username}!`);
            })
            .catch((error) => {
                registerResultLabel!.innerText = "Something Went Wrong!";
                console.error(error);
            });
    });
};
export const initializeFunctions: boolean = true;
