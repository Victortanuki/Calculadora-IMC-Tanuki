 const imc = localStorage.getItem('imc')

    let celula;
    const imcValue = parseFloat(imc)
    if (imcValue < 18.5) {
        celula = document.getElementById("baixo")
    } else if (imcValue >= 18.5 && imcValue < 25) {
        celula = document.getElementById("normal")
    } else if (imcValue >= 25 && imcValue < 30) {
        celula = document.getElementById("gordo")
    } else if (imcValue >= 30 && imcValue < 35) {
        celula = document.getElementById("gordo1")
    } else if (imcValue >= 35 && imcValue < 40) {
        celula = document.getElementById("gordo2")
    } else {
        celula = document.getElementById("gordo3")
    }

    if (celula) {
        celula.classList.add("celulaimc")
    }




  