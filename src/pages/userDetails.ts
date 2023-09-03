import { checkIfUserNameExists } from "../data/dummyJson";
import { errorContainer } from "../error/error404";
import { showPage } from "../utilities/routing";

const details = document.createElement("div");
details.setAttribute("id", "mainContainer");

try {
    const userDetailsString = sessionStorage.getItem("userDetails");
    const actualUserDetails = JSON.parse(userDetailsString ?? "");
    const user = await checkIfUserNameExists(actualUserDetails.username);
    const username = actualUserDetails.username;
    const role = user.users[0].company.title;

    let nodeString = `<div>
    <div id="idContainer">
        <h1>Welcome Back!</h1>
        <h4>Here's your account info:</h4>
        <div class="actualDetails">
        <img src="https://www.qrcode-monkey.com/img/default-preview-qr.svg" alt="QR Code containing user details" id="QRimage" />
            <div id="detailsContainer">
                <p class="label" ">USERNAME: </p>
                <p class="actual" id="userNameLabel">${username}</p>
                <p class="label" >ROLE: </p>
                <p class="actual" id="RoleLabel"> ${role}</p>
            </div>
        </div>
    </div><a href="/" id="signOut" onclick="sessionStorage.clear()">Sign out</a>
    
    `;
    details.insertAdjacentHTML("beforeend", nodeString);
} catch {
    showPage(errorContainer);
}
export { details };
