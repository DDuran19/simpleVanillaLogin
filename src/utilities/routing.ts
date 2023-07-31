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

export function showPage(page: HTMLDivElement) {
    const currentPage = document.getElementById("mainContainer");
    const app = document.getElementById("app") as HTMLDivElement;

    if (currentPage) {
        currentPage.replaceWith(page);
        if (page === details) {
            console.log("I was called");
            const userDetailsString = sessionStorage.getItem("userDetails");
            const actualUserDetails = JSON.parse(userDetailsString ?? "");
            const userNameLabel = document.getElementById(
                "userNameLabel"
            ) as HTMLParagraphElement;
            const descriptionLabel = document.getElementById(
                "descriptionLabel"
            ) as HTMLParagraphElement;
            const signOut = document.getElementById(
                "signOut"
            ) as HTMLAnchorElement;
            userNameLabel.innerText = actualUserDetails.username;
            descriptionLabel.innerText = actualUserDetails.description;
            signOut.onclick = () => {
                sessionStorage.removeItem("userDetails");
            };
        }
    } else {
        app.appendChild(page);
    }
}

// export function showPage(pageName: string) {
//     const content: HTMLDivElement | null = document.getElementById('content') as HTMLDivElement;
//     content.innerHTML = `<h1>${pageName}</h1>`;
//   }
