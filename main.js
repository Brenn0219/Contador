const numero = document.getElementById("numero");
const subtrair = document.getElementById("subtrair");   
const reset = document.getElementById("reset");
const somar = document.getElementById("somar");

let num = parseInt(numero.textContent);

subtrair.addEventListener("click", () => {
    subtrairNumero();
    colorContador();
})

reset.addEventListener("click", () => {
    resetNumero();
    colorContador();
})

somar.addEventListener("click", () => {
    somarNumero();
    colorContador();
})

function subtrairNumero() {
    num--;

    numero.innerHTML = num;
}

function resetNumero() {
    num = 0;

    numero.innerHTML = 0;
}

function somarNumero() {
    num++;

    numero.innerHTML = num;
}

function colorContador() {
    if(num == 0) {
        numero.style.color = "black";
    }
    else if(num < 0) {
        numero.style.color = "red";
    }
    else {
        numero.style.color = "green";
    }
}