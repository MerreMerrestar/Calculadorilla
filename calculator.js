// document.getElementById("entrada").addEventListener("keydown", function(event) {
//     if (event.key === "Enter") { // Verifica si la tecla presionada es Enter
//         const resultado = values(); // Llama a la función values
//         document.getElementById("resultado").innerText = "Resultado: " + resultado; // Muestra el resultado en el párrafo
//         console.log("Resultado del promedio:", resultado); // Muestra el resultado en la consola
//     }
// });

// function values (){
//     const valor = document.getElementById("entrada").value;
//     const otroValor =(valor).split (",");
//     const num1 =  Number(otroValor[0]);
//     const num2 =  Number(otroValor[1]);
//     const suma = num1 + num2 ;
//     const resultado = suma / 2;
//     return resultado
// }


const PI = 3.1416;
const boton = document.getElementById("boton1");

function valor (){
    const value = document.getElementById("radio").value;
    const r = value * 2;
    document.getElementById("resultado").innerText = "El diámetro es: " + r;
    return r;
    
}

boton.addEventListener('click', valor)

const boton2 = document.getElementById("boton2");

function areaDeCirculo (){
    const r = document.getElementById("area").value;
    const area = PI * (r * r);
    document.getElementById("p2").innerText = "El Area es: " + area;
    return r
}

boton2.addEventListener('click', areaDeCirculo)

const boton3 = document.getElementById("boton3");

function areaEnDiametro(){
    const diametro = document.getElementById("diametro").value;
    const radio = diametro / 2;
    document.getElementById("p3").textContent = "El radio es:" + radio;
    return radio;
}

boton3.addEventListener('click', areaEnDiametro)

const boton4 = document.getElementById("boton4");

function volumen (){
    const r = document.getElementById("volumen").value;
    const r3 = r * r * r ;
    const volumen = (4/3) * PI * r3;
    document.getElementById("p4").textContent = "el Volumen es: " + volumen;
    return volumen;
}

boton4.addEventListener('click', volumen)
