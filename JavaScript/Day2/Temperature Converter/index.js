const button = document.getElementById("submit_button");
const ctof = document.getElementById("ctof");
const ftoc = document.getElementById("ftoc")
const output = document.getElementById("output")
const input = document.getElementById("input")




button.onclick = function() {
    if(ctof.checked) {
        output.textContent = ((Number(input.value) * 9) / 5) +32
    } else if(ftoc.checked) {
        output.textContent = ((Number(input.value) - 32) * 5) / 9
    }
}