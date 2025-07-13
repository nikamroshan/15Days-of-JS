const passwordval = document.getElementById("passwordBOX");

const length = 10;
const Uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const Lowercase = 'abcdefghijklmnopqrstuvwxyz';
const number = '1234567890';
const symbols = ' !@$%^&*()_+#';

const allchar = Uppercase + Lowercase + number + symbols;

function random() {
    let password = '';

    // Ensure one character from each type
    password += Uppercase[Math.floor(Math.random() * Uppercase.length)];
    password += Lowercase[Math.floor(Math.random() * Lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    // Fill the remaining length
    while (password.length < length) {
        password += allchar[Math.floor(Math.random() * allchar.length)];
    }

    passwordval.value = password;
}
