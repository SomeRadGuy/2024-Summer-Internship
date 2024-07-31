const input = document.getElementById("input")

const AC_button = document.getElementById("AC_button")
const back_button = document.getElementById("back_button")
const percentage_button = document.getElementById("percentage_button")
const division_button = document.getElementById("division_button")

const seven_button = document.getElementById("seven_button")
const eight_button = document.getElementById("eight_button")
const nine_button = document.getElementById("nine_button")
const multiplication_button = document.getElementById("multiplication_button")

const four_button = document.getElementById("four_button")
const five_button = document.getElementById("five_button")
const six_button = document.getElementById("six_button")
const minus_button = document.getElementById("minus_button")

const one_button = document.getElementById("one_button")
const two_button = document.getElementById("two_button")
const three_button = document.getElementById("three_button")
const plus_button = document.getElementById("plus_button")

const zero_button = document.getElementById("zero_button")
const decimal_button = document.getElementById("decimal_button")
const free_button = document.getElementById("free_button")
const equal_button = document.getElementById("equal_button")

let input_changer = '';

AC_button.onclick = function(){
    input_changer = "";
    input.textContent = input_changer
}

back_button.onclick = function(){
    input_changer = input_changer.slice(0, input_changer.length - 1)
    input.textContent = input_changer
}

percentage_button.onclick = function(){
    length_checker()
    length_limit()
    input_changer += "%"
    input.textContent = input_changer
}

division_button.onclick = function(){
    length_checker()
    length_limit()
    input_changer += "/";
    input.textContent = input_changer
}


seven_button.onclick = function(){
    length_checker()
    length_limit()
    input_changer += "7";
    input.textContent = input_changer
}

eight_button.onclick = function(){
    length_checker()
    length_limit()
    input_changer += "8";
    input.textContent = input_changer
}

nine_button.onclick = function(){
    length_checker()
    length_limit()
    input_changer += "9";
    input.textContent = input_changer
}

multiplication_button.onclick = function(){
    length_checker()
    length_limit()
    input_changer += "x";
    input.textContent = input_changer
}


four_button.onclick = function(){
    length_checker()
    length_limit()
    input_changer += "4";
    input.textContent = input_changer
}

five_button.onclick = function(){
    length_checker()
    length_limit()
    input_changer += "5";
    input.textContent = input_changer
}

six_button.onclick = function(){
    length_checker()
    length_limit()
    input_changer += "6";
    input.textContent = input_changer
}

minus_button.onclick = function(){
    length_checker()
    length_limit()
    input_changer += "-";
    input.textContent = input_changer
}


one_button.onclick = function(){
    length_checker()
    length_limit()
    input_changer += "1";
    input.textContent = input_changer
}

two_button.onclick = function(){
    length_checker()
    length_limit()
    input_changer += "2";
    input.textContent = input_changer
}

three_button.onclick = function(){
    length_checker()
    length_limit()
    input_changer += "3";
    input.textContent = input_changer
}

plus_button.onclick = function(){
    length_checker()
    length_limit()
    input_changer += "+";
    input.textContent = input_changer
}



zero_button.onclick = function(){
    length_checker()
    length_limit()
    input_changer += "0";
    input.textContent = input_changer
}

decimal_button.onclick = function(){
    length_checker()
    length_limit()
    input_changer += ".";
    input.textContent = input_changer
}


equal_button.onclick = function(){

    let first_number = ''
    let second_number = ''
    let opertor;
    let check_for_operation = false;


    for(i of input_changer){
        if(i == "%" || i == "/" || i == "x" || i == "-" || i == "+"){
            opertor = i
            check_for_operation = true;
        } else {
            if(check_for_operation){
                second_number += i
            } else if(!check_for_operation){
                first_number += i
            }
        }
    }

    if(opertor == "%"){
        answer = Number(first_number)/100
    }
    if(opertor == "/"){
        answer = Number(first_number)/Number(second_number)
    }
    if(opertor == "x"){
        answer = Number(first_number) * Number(second_number)
    }
    if(opertor == "-"){
        answer = Number(first_number) - Number(second_number)
    }
    if(opertor == "+"){
        answer = Number(first_number) + Number(second_number)
    }
    
    if((String(answer)).length > 15 ){
        console.log("Answer is long")
        document.getElementById("input").style.fontSize = "1.5em"
    }
    
    input.textContent = answer
    input_changer = ''
}

function length_checker(){
    if(input_changer.length > 13){
        document.getElementById("input").style.fontSize = "1.5em"
    } else if(input_changer.length <= 14){
        document.getElementById("input").style.fontSize = "2em"
    }
}

function length_limit(){
    if(input_changer.length > 18){
        alert("Input Limit Reached")
        input_changer = input_changer.slice(0, input_changer.length - 1)
    }
}