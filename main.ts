//== Main.ts ==//

/**
 * Main function will return nothing contains all the function executed
 */

interface User {
    floUserName: string
    floId: string
    project: string
}

/**
 * _root is always a HTML Element
 */
type RootNode = HTMLElement

// Declaring all the selectors
let _rootElement: RootNode = document.getElementById("root")
let _searchForm: RootNode = document.getElementById("searchForm")
let _searchInput: RootNode = document.getElementById("searchInput")

const main = (): void => {

    // get all the users list
    const floUserList: Array<User> = [
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

    const renderUserLisit = (): void => {
        // render the users in DOM for first load
        for (let i: number = 0; i < floUserList.length; i++) {
            // destructure the keys 
            let { floId, floUserName, project } = floUserList[i]

            // creating the html ELement
            let el: HTMLAnchorElement = document.createElement("a")
            el.href = `/intern.html/?${floId}`

            el.innerHTML = `
            <div class="card-heading">${floUserName}</div>
            <div>${floId}</div>
            <div>${project}</div>
        `
            // add the styling to the Element
            el.className = "card"

            // add the element to the root
            _rootElement.appendChild(el)

        }
    }

    /**
     * create a card list with the given list
     */

    const generateCard = (list: any): void => {

        for (let i: number = 0; i < list.length; i++) {

            // destructure all the keys
            let { floUserName, floId, project } = list[i]

            let el: HTMLAnchorElement = document.createElement("a")
            // stye the element
            el.className = "card"

            // fill the values in it
            el.innerHTML = `
            <div class="card-heading">${floUserName}</div>
            <div>${floId}</div>
            <div>${project}</div>
        `
            _rootElement.appendChild(el)
        }

    }

    // search function
    const searchName = (e: any): any => {

        // Prevent from page loading
        let floName: string = e.target.value

        // clear the list
        _rootElement.innerHTML = ""

        // show the loading indicator
        _rootElement.innerHTML = "<h1>Loading</h1>"

        const result: Array<{
            floUserName: string,
            floId: string,
            project: string
        }> = floUserList.filter((user: User): boolean => {
            let newUserName = user.floUserName.slice(0, floName.length)
            return newUserName === floName
        })

        // clear the Loading
        _rootElement.innerHTML = ""

        if (result.length === 0) {
            // clear all the search result
            renderUserLisit()
        } else {
            // fill the info the element
            generateCard(result)
        }
    }

    _searchInput.addEventListener("input", searchName)

    // set the data of the flo user list
    renderUserLisit()

}

// call the main function
main()
