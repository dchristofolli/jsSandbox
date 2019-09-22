function confirma() {
    const retVal = confirm("Tem certeza?");
    if (retVal) {
        document.write("O usuário decidiu continuar");
        return true;
    } else {
        redirectHome()
        return false;
    }
}

function redirectHome() {
    window.location = "http://localhost:63342/dropbox/index.html?_ijt=nis5c9fja5c6hckvd8726lj1rd";
    document.write("Você será redirecionado à página inicial em 5 segundos");
    setTimeout('window.history.go(-1)', 5000)
}

function validateEmail() {
    const emailID = document.cadastro.email.value;
    let atpos = emailID.indexOf("@");
    let dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Digite um e-mail válido");
        document.cadastro.email.focus();
        return false;
    }
    return true;
}

function validateCPF() {
    const cpfNum = document.cadastro.email.value;
    var Soma;
    var Resto;
    Soma = 0;
    if (cpfNum === "00000000000") return false;

    for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(cpfNum.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) Resto = 0;
    if (Resto !== parseInt(cpfNum.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpfNum.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) Resto = 0;
    if (Resto !== parseInt(cpfNum.substring(10, 11))) {
        alert("CPF inválido")
        return false;
    }
    return true;
}


