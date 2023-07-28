import { Login } from "../pages/login";
export function handleNavigation(){
    const path: string = window.location.pathname;
    console.log(path);
    if (path === '/' || path === '') {
        showPage(Login);} 
    //     else if (path === '/about') {
    //     showPage('About');
    //   } else if (path === '/contact') {
    //     showPage('Contact');
    //   } else {
    //     // Handle 404 - Page Not Found
    //     showPage('NotFound');
    //   }
}
export function showPage(page: HTMLDivElement){
    document.body.appendChild(page);
}

// export function showPage(pageName: string) {
//     const content: HTMLDivElement | null = document.getElementById('content') as HTMLDivElement;
//     content.innerHTML = `<h1>${pageName}</h1>`;
//   }