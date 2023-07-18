
const FLUJO = document.getElementById("flu");
const BUTTON = document.getElementById("calcular");
const INPUT = document.getElementById("peso")
const MAN = document.getElementById("man")
const ERROR = document.getElementById("error")

BUTTON.addEventListener("click", calcular);

function calcular() {
    let peso = INPUT.value
    if (peso =='') {
        console.log('vacio')
    }
    let error = INPUT.value
    if (error <= 0){
        console.log('error')
        ERROR.innerHTML = 'Ingrese dato valido'
        ERROR.style.display = "block"

    }
    console.log(INPUT.value)
    if (peso<=30){
        console.log(calcularholliday(peso))
        FLUJO.innerHTML = calcularholliday(peso) + "cc diario";
        MAN.innerHTML = 'm+m/2 '+ ((calcularholliday(peso))/24).toFixed(2) + "cc/hr ";

        FLUJO.style.display = "block";
        MAN.style.display = "block";

    }
    else if (peso>=30) {
        console.log(superficieCorporal(peso), "SC")
        FLUJO.innerHTML = superficieCorporal(peso)[0] + "cc/hr CON 1500";
        MAN.innerHTML = superficieCorporal(peso)[1] + "cc/hr CON 2000";

        FLUJO.style.display = "block"
        MAN.style.display = "block"
    }
}

function calcularholliday (peso){
    let auxilio = 0;
    if  (peso<=10) { 
        auxilio = (peso*100)    
    }

    else if (peso <=20) {
        auxilio = ((peso-10)*50+1000)
    }

    else if (peso <=30) {
        auxilio = (1500+(peso-20)*20)
    }
    return auxilio  
}

function superficieCorporal (peso){
    let superficieCorporal = (((peso * 4)+ 7) / (peso +90));
    return [(superficieCorporal * 1500).toFixed(2),(superficieCorporal*2000).toFixed(2)]
    


}

