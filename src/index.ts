import RnCard from "./components/rn-card.js";
import routes from "./components/routes.js"

//== Entry Point ==//

let main = (): void => {
    customElements.define("rn-card", RnCard);

    // Main function

    let indexPage = `
            <rn-card></rn-card>
            <rn-card></rn-card>
            <rn-card></rn-card>
            <rn-card></rn-card>
            <rn-card></rn-card>
            <rn-card></rn-card>
            <rn-card></rn-card>
            <rn-card></rn-card>
            <rn-card></rn-card>
        `;

    let profilePage = `<div>Profile Page</div>`;

    // get all the seelectors
    let _rootDiv: HTMLElement = document.getElementById("root");
    let _backBtn: HTMLElement = document.getElementById("backBtn");

    _backBtn.addEventListener("click", (e) => {
        window.history.back();
        _rootDiv.innerHTML = routes["/"];
    });

    // setting the data for Index Page
    _rootDiv.innerHTML = routes["/"];

    /*let _rnCard = document.querySelector("rn-card");

    _rnCard.addEventListener("click", (e) => {
        window.history.pushState(
            {},
            "/detail",
            window.location.origin + "/detail"
        );

        _rootDiv.innerHTML = routes["/detail"];
    });*/
};

main();
