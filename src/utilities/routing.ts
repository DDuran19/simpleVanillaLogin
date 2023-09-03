import { checkIfUserNameExists } from "../data/dummyJson";
import { errorContainer } from "../error/error404";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { details } from "../pages/userDetails";
import { PushState } from "./pushState";

export function handleNavigation() {
    const path: string = window.location.pathname;

    if (path === "" || path === `/`) {
        showPage(Login);
    } else if (path === `/Register`) {
        showPage(Register);
    } else if (path === "/UserDetails") {
        showPage(details);
        console.log("HANDLE NAVIGATION: ", details);
    } else {
        // Handle 404 - Page Not Found
        showPage(errorContainer);
    }
}

export async function showPage(page: HTMLDivElement) {
    try {
        const currentPage = document.getElementById("mainContainer");
        const app = document.getElementById("app") as HTMLDivElement;

        if (currentPage) {
            currentPage.replaceWith(page);
            if (page === details) {
                console.log("I was called");
                const userDetailsString = sessionStorage.getItem("userDetails");
                const actualUserDetails = JSON.parse(userDetailsString ?? "");
                const roleElement = document.getElementById("RoleLabel");
                const signOutElement = document.getElementById("signOut");
                signOutElement?.addEventListener("click", (e) => {
                    sessionStorage.clear();
                    PushState(e, signOutElement);
                });
                const userNameElement =
                    document.getElementById("userNameLabel");
                const user = await checkIfUserNameExists(
                    actualUserDetails.username
                );
                const role = user.users[0].company.title;
                if (roleElement && userNameElement) {
                    roleElement.innerHTML = role;
                    userNameElement.innerHTML = actualUserDetails.username;
                }
                handleNavigation();
            }
        } else {
            app.appendChild(page);
        }
    } catch {
        showPage(errorContainer);
    }
}
