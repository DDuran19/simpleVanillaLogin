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

// export const users = getData("admin").then;

export function resetButton(button: HTMLInputElement) {
    button.disabled = false;
    button.value = "Login";
}
export function resetResetLabel(label: HTMLParagraphElement) {
    label.innerText = "";
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
                resetButton(loginButton);
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
            resetButton(loginButton);
        })
        .catch((error) => {
            resultLabel.innerText = `Something went wrong!`;
            console.log(error);
            loginButton.disabled = false;
        });
    console.log(isLoggedIn);
};
