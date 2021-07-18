import routes from "./routes.js"

class RnCArd extends HTMLElement {
    static template() {
        return `
            <style>
                .card {
                    padding: 1em;
                    background: #ddd;
                    border-radius: 5px;
                    width: 100%;
                    cursor: pointer;
                    min-width: 250px;
                    margin: 1em;
                }
            </style>
            <div class="card">
                <div>flo User Name</div>
                <div>flo id</div>
            </div>
        `
    }

    connectedCallback() {
        this.appendChild(template.content.cloneNode(true))
        this.addEventListener("click", (e) => {
            console.log(e)
            window.history.pushState(
                {},
                "/detail",
                window.history.origin + "/detail"
            )
            document.getElementById("root").innerHTML = routes["/detail"]
        })

    }
}

let template = document.createElement("template")
template.innerHTML = RnCArd.template()

export default RnCArd
