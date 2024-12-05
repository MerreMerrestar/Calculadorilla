//-----------------------------------//
        // Parte del cuadrado//

//-------------------------------------------//
        // formateador de los numeros//

    function formatearNumero(numero) {
        return numero
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
          

//-----------------------------------//
    

    const botonsuma = document.getElementById("botonsuma");

function suma () {
    const numeros = document.getElementById("sum").value;
    const n = numeros.split(" ");
        let suma = 0 ;
        
    for (let i = 0 ; i < n.length ; i++){
        let el = Number(n[i]);
        suma += el;
    }
        const sumaF = formatearNumero(suma)
    document.getElementById("valores1").textContent = "La suma de los numeros es: " + sumaF;
        console.log("Suma toal" , sumaF);

            if(isNaN(sumaF)) { alert ("Menol y me va a fuñi la pagina cero letra criolla y cero simbolo e icono. Nadamas espacios 😤") }

        return sumaF;
}
        
    botonsuma.addEventListener('click', suma)

    const botonMultiplicar = document.getElementById("botonMultiplicar");

    function multiplicacion () {

        const numeros = document.getElementById("multiplicar").value;
        const n = numeros.split(" ");
        let multiplicacion = 1;
   
        for (let i = 0; i < n.length; i++) {

            const el = Number(n[i]);
            multiplicacion *= el;
              
        }
        const multiplicacionF = formatearNumero(multiplicacion)
        
            document.getElementById("valores2").textContent = "La multiplicacion de los numeros es: " + multiplicacionF;

            console.log("La multiplicacion total es = " + multiplicacionF);

                if(isNaN(multiplicacionF)) { alert ("Menol y me va a fuñi la pagina cero letra criolla y cero simbolo e icono. Nadamas espacios 😤") }

        return multiplicacionF;
}

    botonMultiplicar.addEventListener('click', multiplicacion)

    const botonDividir = document.getElementById("botonDividir");

function dividir (){
    const numero = document.getElementById("dividir").value;
    const n = numero.split(" ");
    let resultado = n[0];

        for(let i = 1 ; i < n.length; i++){
            const el = n[i];
            resultado /= el;
        }
    const resultadoF = formatearNumero(resultado);

    document.getElementById("valores3").textContent = "La division de los numeros es: " + resultadoF;
    
    console.log("La division total es = " + resultadoF)

        if(isNaN(resultadoF)) { alert ("Menol y me va a fuñi la pagina cero letra criolla y cero simbolo e icono. Nadamas espacios 😤") }

    return resultadoF
}

    botonDividir.addEventListener('click', dividir)

    const botonRadicar2 = document.getElementById("botonRadicarCuadrado");
    const botonRadicar3 = document.getElementById("botonRadicarCubo");
    const botonRadicar4 = document.getElementById("botonRadicarCuarta");

function radicacion (forma) {
    let n = document.getElementById("radicar").value;
        n = Number(n)

    const resultado = Math.pow(n , forma);
    const resultadoF = formatearNumero(resultado);

    document.getElementById("valores4").textContent = "La radicacion de los numeros es: " + resultadoF

    console.log("La radicacion total es = " + resultadoF)

        if(isNaN(resultadoF)) { alert ("Menol y me va a fuñi la pagina cero letra criolla y cero simbolo e icono. Nadamas espacios 😤") }

    return resultadoF
    
}

    botonRadicar2.addEventListener ('click' , () => radicacion(1/2))
    botonRadicar3.addEventListener ('click' , () => radicacion(1/3))
    botonRadicar4.addEventListener ('click' , () => radicacion(1/4))


    const botonPotenciar2 = document.getElementById("potenciar2")
    const botonPotenciar3 = document.getElementById("potenciar3")
    const botonPotenciar4 = document.getElementById("potenciar4")

    function potencia (forma) {
        let n = document.getElementById("potenciar").value;
            n = Number(n)
    
        const resultado = Math.pow(n , forma);
        const resultadoF = formatearNumero(resultado);
    
        document.getElementById("valores5").textContent = "La potencia de los numeros es: " + resultadoF
    
        console.log("La potenciacion total es = " + resultadoF)

            if(isNaN(resultadoF)) { alert ("Menol y me va a fuñi la pagina cero letra criolla y cero simbolo e icono. Nadamas espacios 😤") }

        return resultadoF
        
    }

    botonPotenciar2.addEventListener('click' , () => potencia(2))
    botonPotenciar3.addEventListener('click' , () => potencia(3))
    botonPotenciar4.addEventListener('click' , () => potencia(4))