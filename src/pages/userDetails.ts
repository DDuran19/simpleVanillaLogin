import { checkIfUserNameExists } from "../data/dummyJson";
import { errorContainer } from "../error/error404";
import { handleNavigation, showPage } from "../utilities/routing";

const details = document.createElement("div");
details.setAttribute("id", "mainContainer");

try {
    const userDetailsString = sessionStorage.getItem("userDetails");
    const actualUserDetails = JSON.parse(userDetailsString ?? "");
    let username = actualUserDetails.username;
    let role;
    checkIfUserNameExists(actualUserDetails.username).then((user) => {
        role = user.users[0].company.title;
        document.getElementById("RoleLabel")!.innerHTML = role;
    });

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
    handleNavigation();
    showPage(errorContainer);
}
export { details };
