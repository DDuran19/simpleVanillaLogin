import { errorContainer } from "../error/error404";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { details } from "../pages/userDetails";

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
            }
        } else {
            app.appendChild(page);
        }
    } catch {
        showPage(errorContainer);
    }
}
