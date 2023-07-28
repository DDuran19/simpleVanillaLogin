import { errorContainer } from "../error/error404";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
export function handleNavigation() {
    const path: string = window.location.pathname;
    console.log(path);
    if (path === "/" || path === "") {
        showPage(Login);
    } else if (path === "/Register") {
        showPage(Register);
        //   } else if (path === '/contact') {
        //     showPage('Contact');
    } else {
        // Handle 404 - Page Not Found
        showPage(errorContainer);
    }
}
export function showPage(page: HTMLDivElement) {
    // document.body.appendChild(page);
    const currentPage = document.getElementById("mainContainer");
    const app = document.getElementById("app") as HTMLDivElement;

    if (currentPage) {
        currentPage.replaceWith(page);
    } else {
        app.appendChild(page);
    }
}

// export function showPage(pageName: string) {
//     const content: HTMLDivElement | null = document.getElementById('content') as HTMLDivElement;
//     content.innerHTML = `<h1>${pageName}</h1>`;
//   }
