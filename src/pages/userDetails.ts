const details = document.createElement("div");
details.setAttribute("id", "mainContainer");
details.innerHTML = `
<div id="idContainer">
    <h1>Welcome Back!</h1>
    <h4>Here's your account info:</h4>
    <div class="actualDetails">
    <img src="https://www.qrcode-monkey.com/img/default-preview-qr.svg" alt="QR Code containing user details" id="QRimage" />
        <div id="detailsContainer">
            <p class="label" ">USERNAME: </p>
            <p class="actual" id="userNameLabel"> Actual Username </p>
            <p class="label" >DESCRIPTION: </p>
            <p class="actual" id="descriptionLabel">Actual Description: </p>
        </div>
    </div>
<a href="/"> Sign out </a>
`;

export { details as userDetails };
