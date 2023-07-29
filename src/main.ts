import "./styles/style.css";
import "./styles/containers.css";

import { handleNavigation } from "./utilities/routing.ts";
import { errorContainer } from "./error/error404.ts";
import { RepositoryPathName } from "./types/constants.ts";
const mainDiv: HTMLElement | null = document.getElementById("app");

if (mainDiv) {
    mainDiv.innerHTML = `<nav>
  <a href="${RepositoryPathName}/">Login</a>
  <a href="${RepositoryPathName}/Register">Register</a>
  <a href="${RepositoryPathName}/UserDetails">User Details</a>
</nav>
<div id="content">
  </div>
`;
    // Event listener for popstate event
    window.addEventListener("popstate", handleNavigation);

    // This will add event listener for internal links
    const links = document.querySelectorAll("a[href]");
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const href = link.getAttribute("href") as string;
            let newHref: string = href.replace(`${RepositoryPathName}`, "");
            console.log("BEFORE: ", newHref);
            newHref = `/${RepositoryPathName}${newHref}`;
            console.log("AFTER: ", newHref);
            window.history.pushState("", "", newHref);
            handleNavigation();
        });
    });

    handleNavigation();
} else {
    document.body.appendChild(errorContainer);
}
