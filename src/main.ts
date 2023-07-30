import "./styles/style.css";
import "./styles/containers.css";

import { handleNavigation } from "./utilities/routing.ts";
import { errorContainer } from "./error/error404.ts";
import { PushState } from "./utilities/pushState.ts";
const mainDiv: HTMLElement | null = document.getElementById("app");

if (mainDiv) {
    mainDiv.innerHTML = `<nav>
  <a href="/">Login</a>
  <a href="/Register">Register</a>
  <a href="/UserDetails">User Details</a>
</nav>
<div id="content">
  </div>
`;
    // Event listener for popstate event
    window.addEventListener("popstate", handleNavigation);

    // This will add event listener for internal links
    const links: NodeListOf<HTMLElement> = document.querySelectorAll("a[href]");
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            PushState(e, link);
        });
    });

    handleNavigation();
} else {
    document.body.appendChild(errorContainer);
}
