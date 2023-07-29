import { handleNavigation } from "./routing";

export function PushState(e: MouseEvent | Event, element: HTMLElement) {
    e.preventDefault();
    const href = element.getAttribute("href") as string;
    window.history.pushState("", "", href);
    handleNavigation();
}
