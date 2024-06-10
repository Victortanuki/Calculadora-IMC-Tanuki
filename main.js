let imc;

function calcular() {
    let verifaltura = document.getElementById("altura")
    let verifpeso = document.getElementById("peso")

    if (verifpeso.value === "" || verifaltura.value === "") {
        alert("Peso e/ou altura ausente(s)")
        return
    }

    let peso = parseFloat(verifpeso.value)
    let altura = parseFloat(verifaltura.value)

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Insira dados válidos!")
        return
    }

    imc = peso / (altura ** 2)
localStorage.setItem('imc', imc)
    window.location.href = 'finish.html'

}







    
