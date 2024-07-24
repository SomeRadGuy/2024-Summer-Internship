console.log("Hello World");

document.getElementById("heading_h1").textContent = "Hello World";
document.getElementById("heading_p").textContent = "Hope you enjoy your visit";
/*==========================================================================*/

let x;
x = 100;
console.log(`Variable X has the value ${x} and the data type is:`, typeof x);
/*==========================================================================*/

document.getElementById("username_input_button").onclick = function () {
  document.getElementById("username_input_output").textContent =
    `Welcome ` + document.getElementById("username_input").value + `!`;
};
/*==========================================================================*/

const pi = 3.1412;

document.getElementById("circumference_input_button").onclick = function () {
  document.getElementById("circumference_input_output").textContent =
    `The Circumference is: ` +
    2 * pi * document.getElementById("circumference_input").value;
};
/*==========================================================================*/

let count = 0;
const increment = document.getElementById("Increment");
const decrement = document.getElementById("Decrement");
const reset = document.getElementById("Reset");
const display = document.getElementById("counter_display");

increment.onclick = function () {
  count++;
  display.textContent = count;
};

decrement.onclick = function () {
  count--;
  display.textContent = count;
};

reset.onclick = function () {
  count = 0;
  display.textContent = count;
};
/*==========================================================================*/

const information_button = document.getElementById("information_button");
const information_output = document.getElementById("information_output");
const male = document.getElementById("male");
const female = document.getElementById("female");
const sunni = document.getElementById("sunni");
const shia = document.getElementById("shia");
const wahabi = document.getElementById("wahabi");
let information_output_string = "";

information_button.onclick = function () {
  if (male.checked) {
    information_output_string = "You are a male";
  } else {
    information_output_string = "You are a female";
  }

  if (sunni.checked) {
    information_output_string += " and you are a sunni";
  } else if (shia.checked) {
    information_output_string += " and you are a shia";
  } else if (wahabi.checked) {
    information_output_string += " and you are a wahabi";
  }
  information_output.textContent = information_output_string;
};
/*==========================================================================*/

const guess_button = document.getElementById("guess_button");
const guess_output = document.getElementById("guess_output");
const upper_limit = document.getElementById("upper_limit");
const lower_limit = document.getElementById("lower_limit");
const guess_input = document.getElementById("guess_input");
const generate_button = document.getElementById("generate_button");
const generated_message = document.getElementById("generated_message");

let correct_guess = false;
let random_number = 0;

generate_button.onclick = function () {
  random_number = Math.floor(
    Math.random() * (upper_limit.value - Number(lower_limit.value)) +
      Number(lower_limit.value)
  );
  generated_message.textContent = "Number Generated! Guess Below!";
  console.log(random_number);
};

guess_button.onclick = function () {
  if (random_number == Number(guess_input.value)) {
    correct_guess = true;
  }
  if (correct_guess) {
    guess_output.textContent = "You guessed it correct!!";
  } else if (!correct_guess) {
    guess_output.textContent = "You guessed it incorrect!";
  }
};
