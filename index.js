class Card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: "open" })
    }

    async openPop() {
        let detail = this.shadow.querySelector("#transaction")
        let content = this.shadow.getElementById("content")
        let searchNav = this.shadow.getElementById("searchNav")
        let isOpen = detail.style.display === "block"

        if (isOpen) {
            detail.style.display = "none"
        } else {
            detail.style.display = "block"
            let isReady = false
            searchNav.disabled = !isReady
            content.innerHTML = `
                        <h1 style="text-align: center;">Wait a sec !</h1> 
                    `

            try {
                let uri = `https://ranchimallflo.duckdns.org/api/v1.0/getFloAddressTransactions?floAddress=${this.floid}`
                let res = await fetch(uri)
                let data = await res.json()
                console.log(data)
                content.innerHTML = ``
                if (data.result === "error") {
                    content.innerHTML = `<div style="text-align: center;">${data.description}</div>`
                }
                if (data.result === 'ok') {
                    Object.keys(data.transactions).map((index) => {
                        let { parsedFloData, transactionDetails } = data.transactions[index]
                        // renderUserInfo()
                        const li = document.createElement("li")
                        li.innerHTML = `
                            <li>
                                <div>${parsedFloData.flodata}</div>
                                <div>Sender - Receiver</div>
                                <div>RS. ${parsedFloData.tokenAmount}.00</div>
                            </li>
                        `

                        content.appendChild(li)
                    })
                }
            } catch (e) {
                // ERROR HANDLING
                console.log("Error Occured while fetching the User Data : ", e)
            }
        }
    }

    fetchUserInfo = async () => {
        try {
            let uri = `https://ranchimallflo.duckdns.org/api/v1.0/getFloAddressTransactions?floAddress=FKa43RxHUAdJbgV6KipQ4PvXi6Kgw4HmFn`
            let res = await fetch(uri)
            data = await res.json()
            console.log(data)
            content.innerHTML = ""
            if (data.result === 'ok') {
                Object.keys(data.transactions).map((index) => {
                    let { parsedFloData, transactionDetails } = data.transactions[index]
                    // renderUserInfo()
                    renderParsedFloData(parsedFloData)
                })
            }
        } catch (e) {
            // ERROR HANDLING
            console.log("Error Occured while fetching the User Data : ", e)
        }
    }

    connectedCallback() {
        const template = document.querySelector("template")
        const node = document.importNode(template.content, true)
        this.shadow.appendChild(node)

        let container = this.shadow.querySelector(".container")
        let detail = this.shadow.querySelector("#transaction")
        let content = this.shadow.getElementById("content")
        let searchNav = this.shadow.getElementById("searchNav")

        this.shadow.getElementById("floId").innerText = this.flousername
        this.shadow.getElementById("floUserName").innerText = this.floid

        container.addEventListener("click", this.openPop.bind(this))
    }
}

customElements.define("my-card", Card)


let floUserList = [
    {
        floUserName: "Aakriti Sinha",
        floId: "FKa43RxHUAdJbgV6KipQ4PvXi6Kgw4HmFn",
        project: "Product Launch and Blockchain Marketing"
    },
    {
        floUserName: "Shambhavi",
        floId: "FK96PZh4NskoJfWoyqcvLpSo7YnTLWMmdD",
        project: "Product Launch and Blockchain Marketing"
    },
    {
        floUserName: "Salomi Sarkar",
        floId: "F7HVKrF68Y6YKE9XXpHhAcxt6MwRLcUD67",
        project: "Product Launch and Blockchain Marketing"

    },
    {
        floUserName: "Megha Rani",
        floId: "FEvLovuDjWo4pXX3Y4SKDh8sq1AxJzqz9Z",
        project: "P2P Content Collaboration"
    },
    {
        floUserName: "Kriti Shreya",
        floId: "F8zYh6rCuorGmnMtqGFpaKGeBqQaj9WVtG",
        project: "P2P Content Collaboration"
    },
    {
        floUserName: "Rashi Sanghvi",
        floId: "FHWXdnjRRJErqazye4Y9MRmE42D4Bp6Bj7",
        project: "P2P Content Collaboration"
    },
    {
        floUserName: "Muskan Shoundik",
        floId: "FSdjJCJdU43a1dyWY6dRES1ekoupEjFPqQ",
        project: "P2P Content Collaboration"
    },
    {
        floUserName: "Gunjan Kumar Ranjan",
        floId: "FCTGD4M3DvMKupX3j2y5f3cQNDD9i6LUp7",
        project: "P2P Content Collaboration"
    },
    {
        floUserName: "Rakhijeet Singh",
        floId: "FCqLr9nymnbh7ahta1gGC78z634y4GHJGQ",
        project: "P2P Content Collaboration"
    },
    {
        floUserName: "Madhu Verma",
        floId: "F765ofUHBhfXhvzrSgnPjvCvJXXCpoW6be",
        project: "P2P Content Collaboration"
    },
    {
        floUserName: "Shruti Kashyap",
        floId: "FPtrQK6aSCgFeSNpzC68YTznHPfiz7CCvW",
        project: "P2P Content Collaboration"
    },
    {
        floUserName: "Shivam Kumar Pandey",
        floId: "FJK9EDGhKj4Wr2zeCo3zRPXCNU6CXFFQAN",
        project: "JavaScript Development for Blockchain Products"
    },
    {
        floUserName: "Abhijeet Anand",
        floId: "FEHKFxQxycsxw2qQQSn2Y1BCT6Mfb8EMko",
        project: "JavaScript Development for Blockchain Products"
    },
    {
        floUserName: "Ritika Agrawal",
        floId: "FFaB6N1ETZsykXVS2PdM5xhj5BBoqsfsXC",
        project: "JavaScript Development for Blockchain Products"
    },
    {
        floUserName: "Jai Dev",
        floId: "FFoVnVMJv8BTfbk7ij9T5jPHs7VKSz886A",
        project: "JavaScript Development for Blockchain Products"
    }
]
let _rootElement = document.getElementById("root")
let _searchInput = document.getElementById("searchInput")

floUserList.forEach(i => {
    let card = document.createElement("my-card")
    card.floid = i.floId
    card.flousername = i.floUserName
    console.log(card)
    _rootElement.appendChild(card)
})


const searchName = (e) => {

    // Prevent from page loading
    let floName = e.target.value

    // clear the list
    _rootElement.innerHTML = ""

    // show the loading indicator
    _rootElement.innerHTML = "<h1>Loading</h1>"

    const result = floUserList.filter((user) => {
        let newUserName = user.floUserName.slice(0, floName.length)
        return newUserName.toLowerCase() === floName.toLowerCase()
    })

    // clear the Loading
    _rootElement.innerHTML = ""

    if (result.length === 0) {
        floUserList.forEach(i => {
            let card = document.createElement("my-card")
            card.floid = i.floId
            card.flousername = i.floUserName
            console.log(card)
            _rootElement.appendChild(card)
        })
    } else {
        result.forEach(i => {
            let card = document.createElement("my-card")
            card.floid = i.floId
            card.flousername = i.floUserName
            console.log(card)
            _rootElement.appendChild(card)
        })
    }
}

_searchInput.addEventListener("input", searchName)