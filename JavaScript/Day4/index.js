// const myButton = document.getElementById("myButton")

// myButton.classList.add("enabled")
// myButton.classList.remove("enabled")

// myButton.addEventListener("mouseover", event => {
//     myButton.classList.add("hover")
// })

// myButton.addEventListener("mouseout", event => {
//     myButton.classList.remove("hover")
// })

fetch("names.json")
    .then(Response => Response.json()
    .then(value => console.log(value)))