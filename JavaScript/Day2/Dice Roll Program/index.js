const button = document.getElementById("button");
const text_outputs = document.getElementById("text_outputs");
const input = document.getElementById("input");
let random_number;
let random_number_array = [];

button.onclick = function() {
    for(let i = 0; i < Number(input.value); i++) {
        random_number = 0;
        random_number = Math.floor(Math.random() * 6) + 1;
        random_number_array.push(random_number)
    }
    console.log(random_number_array)
}
