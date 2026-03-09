const inputDay = document.getElementById("inputDay")
const inputMonth = document.getElementById("inputMonth")
const inputYear = document.getElementById("inputYear")

const daysElement = document.getElementById("daysElement")
const monthsElement = document.getElementById("monthsElement")
const yearsElement = document.getElementById("yearsElement")

const labelsData = document.getElementsByClassName("labelsData")
const pDiaInvalido = document.getElementsByClassName("Invalido")

function CalculaIdade() {

    erroDia("hsl(0, 1%, 44%)")

    for (let i = 0; i < pDiaInvalido.length; i++)
        pDiaInvalido[i].style.display = "none"
    
    const dataAtual = new Date()

    let diaAtual = dataAtual.getDate()
    let mesAtual = dataAtual.getMonth() + 1 
    let anoAtual = dataAtual.getFullYear()
    let totalDiasAtuais = Number(diaAtual) + Number(mesAtual * 30.4167) + Number(anoAtual * 365)

    let diasAux = inputDay.value
    let mesesAux = inputMonth.value * 30.4167
    let anosAux = inputYear.value * 365
    let nascimento = Number(diasAux) + Number(mesesAux) + Number(anosAux)

    if (inputDay.value.trim() == "") {
        
        pDiaInvalido[0].style.display = "block"
        pDiaInvalido[0].innerText = "This field is required"
        erroDia("hsl(0, 100%, 67%)", 0)

    }else if(inputMonth.value.trim() == ""){

        pDiaInvalido[1].style.display = "block"
        pDiaInvalido[1].innerText = "This field is required"
        erroDia("hsl(0, 100%, 67%)", 1)

    }else if(inputYear.value.trim() ==  ""){

        pDiaInvalido[2].style.display = "block"
        pDiaInvalido[2].innerText = "This field is required"
        erroDia("hsl(0, 100%, 67%)", 2)

    }else if(inputDay.value < 1 || inputDay.value > 31){

        pDiaInvalido[0].style.display = "block"
        pDiaInvalido[0].innerText = "Must be a valid day"
        erroDia("hsl(0, 100%, 67%)", 0)

    }else if(inputMonth.value < 1 || inputMonth.value > 12){

        pDiaInvalido[1].style.display = "block"
        pDiaInvalido[1].innerText = "Must be a valid month"
        erroDia("hsl(0, 100%, 67%)", 1)

    }else if(inputYear.value < 1 || inputYear.value > anoAtual){

        pDiaInvalido[2].style.display = "block"
        pDiaInvalido[2].innerText = "Must be a valid year"
        erroDia("hsl(0, 100%, 67%)", 2)

    }else if (inputDay.value == 31 && (inputMonth.value == 2 || inputMonth.value == 4 || inputMonth.value == 6 || inputMonth.value == 9 || inputMonth.value == 11)) {

        erroDia("hsl(0, 100%, 67%)", 0)  
        pDiaInvalido[0].style.display = "block"
        pDiaInvalido[0].innerText = "Must be a valid day"

    }else if ((inputDay.value == 29 && !(inputYear.value % 4 == 0 && inputYear.value % 100 != 0))) {
            
        if (!(inputYear.value % 400 == 0)) {
            
            erroDia("hsl(0, 100%, 67%)", 0)  
            pDiaInvalido[0].style.display = "block"
            pDiaInvalido[0].innerText = "Must be a valid day"
        }

    }else if(inputDay.value == 30 && inputMonth.value == 2){

        erroDia("hsl(0, 100%, 67%)", 0)  
        pDiaInvalido[0].style.display = "block"
        pDiaInvalido[0].innerText = "Must be a valid day"

    }else if(nascimento > totalDiasAtuais){
    
        erroDia("hsl(0, 100%, 67%)")  

        for (let i = 0; i < pDiaInvalido.length; i++) {
           
            pDiaInvalido[i].style.display = "block"
            pDiaInvalido[i].innerText = "Must be in the past"
        }
    
    }else{

        erroDia("hsl(0, 1%, 44%)")

        for (let i = 0; i < pDiaInvalido.length; i++) {
           
            pDiaInvalido[i].style.display = "none"
        }

        let idade = totalDiasAtuais - nascimento

        yearsElement.innerText = Math.trunc(idade/365)
        monthsElement.innerText = Math.trunc((idade % 365) / 30.417)
        daysElement.innerText = Math.trunc((idade % 365) % 30.41 )
       
    }
}

function erroDia(cor, index) {

    if (index == 0) {

        labelsData[index].style.color = cor
        inputDay.style.borderColor = cor

    }else if(index == 1){

        labelsData[index].style.color = cor
        inputMonth.style.borderColor = cor

    }else if(index == 2){

        labelsData[index].style.color = cor
        inputYear.style.borderColor = cor

    }else{

        for (let i = 0; i < labelsData.length; i++) {
            
            labelsData[i].style.color = cor;
            inputDay.style.borderColor = cor
            inputMonth.style.borderColor = cor
            inputYear.style.borderColor = cor
            
        }
    }
}

inputYear.addEventListener("keyup", (e) =>{

    if (e.code === "Enter") {
        
        CalculaIdade()
    }
})

inputMonth.addEventListener("keyup", (e) =>{

    if (e.code === "Enter") {
        
        CalculaIdade()
    }
})

inputDay.addEventListener("keyup", (e) =>{

    if (e.code === "Enter") {
        
        CalculaIdade()
    }
})