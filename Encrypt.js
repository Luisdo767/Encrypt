// encryptor.js

// function encryptText() {
//     const inputText = document.getElementById("inputText").value;
//     const shift = 3;
//     const encryptedText = shiftText(inputText, shift);
//     document.getElementById("outputText").textContent = "Texto encriptado: " + encryptedText;
// }

// // Función para desencriptar texto
// function decryptText() {
//     const inputText = document.getElementById("inputText").value;
//     const shift = -3; // Desplazamiento inverso para desencriptar
//     const decryptedText = shiftText(inputText, shift);
//     document.getElementById("outputText").textContent = "Texto desencriptado: " + decryptedText;
// }

// // Función auxiliar para realizar el desplazamiento de texto
// function shiftText(text, shift) {
//     let result = "";
//     for (let i = 0; i < text.length; i++) {
//         let char = text[i];

//         if (char.match(/[a-z]/i)) {
//             let charCode = text.charCodeAt(i);

//             if (charCode >= 65 && charCode <= 90) {
//                 // Letras mayúsculas
//                 char = String.fromCharCode(((charCode - 65 + shift + 26) % 26) + 65);
//             } else if (charCode >= 97 && charCode <= 122) {
//                 // Letras minúsculas
//                 char = String.fromCharCode(((charCode - 97 + shift + 26) % 26) + 97);
//             }
//         }

//         result += char;
//     }
//     return result;
// }



// encryptor.js

// Clave de encriptación (debe mantenerse segura)
const key = CryptoJS.enc.Utf8.parse('1234567890123456'); // 16 caracteres para AES-128

// Función para encriptar utilizando AES
function encryptText() {
    const inputText = document.getElementById("inputText").value;

    const encrypted = CryptoJS.AES.encrypt(inputText, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString();

    document.getElementById("outputText").textContent = "Texto encriptado: " + encrypted;
}

// Función para desencriptar utilizando AES
function decryptText() {
    const encryptedText = document.getElementById("inputText").value;

    const decrypted = CryptoJS.AES.decrypt(encryptedText, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });

    const originalText = decrypted.toString(CryptoJS.enc.Utf8);

    document.getElementById("outputText").textContent = "Texto desencriptado: " + originalText;
}
