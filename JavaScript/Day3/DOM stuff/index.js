const heading = document.getElementById("heading")

heading.style.backgroundColor = "yellow"
heading.style.textAlign = "center"

const fruits = document.getElementsByClassName("fruits") 
fruits[0].style.backgroundColor = "red"

for(let fruit of fruits){
    fruit.style.backgroundColor = "red"
}

Array.from(fruits).forEach(fruit =>{
    fruit.style.backgroundColor = 'blue'
})

const newH1 = document.createElement("h1")
newH1.textContent = "Hello World"
newH1.id = "NewH1"

document.getElementById("box1").append(newH1)