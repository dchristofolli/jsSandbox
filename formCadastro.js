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
    window.location = "http://localhost:63342/JsSandbox/index.html";
    document.write("Você será redirecionado à página inicial em 5 segundos");
    setTimeout('window.location.href="http://localhost:63342/jsSandbox/index.html"', 5000)
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
    var strCPF = document.cadastro.CPF.value;
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF === "00000000000") alert("CPF inválido");

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) Resto = 0;
    if (Resto !== parseInt(strCPF.substring(9, 10))) alert("CPF inválido");

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) Resto = 0;
    if (Resto !== parseInt(strCPF.substring(10, 11))) alert("CPF inválido");
    return true;
}

function validatePass(){
    const pass = document.cadastro.pass.value;
    const confirm = document.cadastro.confirm.value;
    if (pass.length <4){
        alert("A senha deve ter pelo menos 4 caracteres")
    }
    if (pass !== confirm){
        alert("Senha não confirmada");
        return false;
    }
    else {
        return false;
    }
}

function validateName(){
    const userName = document.cadastro.name.value;
    if (userName.length < 1){
        alert("O nome deve ser preenchido")
    }
    else{
        return true
    }
}

