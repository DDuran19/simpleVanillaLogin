import { createClient } from "@supabase/supabase-js";
import { loginForm } from "../pages/login";
import { Database } from "../supabase";

const myKey: string = import.meta.env.VITE_MONGODBsimpleVanillaLoginAPI;

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    "https://haymvsaanqluueuvwbsk.supabase.co",
    myKey
);

export type User = Database["public"]["Tables"]["simpleVanillaLogin"]["Row"];

async function getData(
    username: string,
    password: string
): Promise<User[] | null> {
    const { data, error } = await supabase
        .from("simpleVanillaLogin")
        .select("*")
        .eq("username", username);
    if (error) {
        alert(`Something Went wrong! ${error.message}`);
    }
    if (data) {
        return data[0];
    }
    return null;
}
export const users = await getData("admin", "admin");

export function login() {
    loginForm.onsubmit = () => {};
}
