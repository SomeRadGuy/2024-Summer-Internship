function generate_password(password_length, lower_case_alphabets, upper_case_alphabets, symbols){

    const lower_case = 'qwertyuiopasdfghjklzxcvbnm'
    const upper_case = 'QWERTYUIOPASDFGHJKLZXCVBNM'
    const all_symbols = '~!@#$%^&*()_+{}|:"<>?,.;[]'

    let allowed_letters = ''
    let password = ''

    allowed_letters += lower_case_alphabets ? lower_case : ""
    allowed_letters += upper_case_alphabets ? upper_case : ""
    allowed_letters += symbols ? all_symbols : ""

    let random_number = 0;

    for(let i = 0; i < password_length; i++){
        random_number = 0
        random_number = Math.floor(Math.random() * allowed_letters.length) + 1
        password += allowed_letters.charAt(random_number)
    }

    return password;
}

const password_length = 12
const lower_case_alphabets = true;
const upper_case_alphabets = true;
const symbols = true;
let password = ""

password = generate_password(password_length, lower_case_alphabets, upper_case_alphabets, symbols)

console.log(`Generate Password is: ${password}`)