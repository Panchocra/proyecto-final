/*
let ComoPido = prompt("pedilooooo");
console.log(ComoPido);
const numero = 50;
const numero2 = 10;
console.log(numero + numero2);
*/
/*
let cantidadDeseada = prompt("Cuanto va a llevar");
let nombreProducto = "Detergente"; 
let precioDetergente = 100 * cantidadDeseada;
alert(precioDetergente);
*/
/*
let nombreProducto = "Producto X";
let precioUnitario = 100;
let cantidadDeseada = prompt("Ingrese la cantidad deseada del producto");

if (cantidadDeseada >= 5) {
  let descuento = precioUnitario * 0.10; 
  let precioConDescuento = precioUnitario - descuento;
  let costoTotal = cantidadDeseada * precioConDescuento;
  alert("El costo total de la compra es: $" + costoTotal);
} else {
  let costoTotal = cantidadDeseada * precioUnitario;
  alert("El costo total de la compra es: $" + costoTotal);
}
*/
/*
const nombreProducto = "Detergente";
const precioDetergente = 1000;
let cantidadDeseada = prompt("Cuanto va a llevar:");
parseInt(cantidadDeseada);

let costoTotalSinDescuento= cantidadDeseada * precioDetergente;

if (cantidadDeseada >= 5) {
    precioFinal = parseInt(precioDetergente - precioDetergente * 10 / 100)
}

alert(`precio final ${precioFinal}`) //incompleto
*/

//funciones
/*
function Saludar(nombre) {
    console.log(`HOLA ${nombre}`);
}
let nombre = prompt(`Ingrese su nombre:`);
Saludar(nombre);

function saludar(a,b) {
    alert(`holA ${a} y${b}`)
}
let nombreus = prompt(`Ingrese su nombre:`);
saludar(nombreus,`fuuehw`);


let saludarA = () => {
    console.log(`holdd`)
}
saludarA();


function sumarWReturn(a, b) {
    return a + b;
}
let resultado = sumarWReturn(3, 5);
alert(resultado);
*/

//let variableGlobal = varable golbal;
/* const function = () => {
    let variableLocal = variable local;
}
*/
/*
function sumarProductos(precioUnitario, cantidadDeseada) {
    let totalGastado = precioUnitario * cantidadDeseada;
    return totalGastado;
}
console.log( `El total gastado es: ${totalGastado}`);
/*
const precioUnitario = 1000;
let cantidadDeseada = 4;
let totalCompra = sumarProductos(precioUnitario, cantidadDeseada);
console.log(`El total de la compra es: $` + totalCompra);
*/
/*
let productos = ["Producto1, Producto2, Producto3, Producto4, Producto5"];
for (let i = 0; i <productos.length; i++) {
    console.log("Producto " + (i + 1) + ":")
}

//actualizar stock
const nuevoprod = productos.pop();
console.log(nuevoprod);
*/
/* objetos

let arrayGente = [
    {
        id: 1,
        tipo: comprador,
        carrito: "4"
    }
    ,
    {
        id: 2,
        tipo: empleado,
        funcion: vendedor
    }

];

for( let i = 0; i<=arrayGente.length; i++) {
    console.log(arrayGente[i].tipo);
    console.log(arrayGente[i].carrito);
    console.log(arrayGente[i].funcion);
    console.log(" ");
}
confirm("¿Buena compra o mala compra?");
open();
close();
postMessage("tontito");
*/
/*
let producto = [
    {
        prod: camiseta,
        precio: 2700,
        cantidadDisponible: 15
    }
];

for (let i = 0; i<=producto.length; i++) {
    console.log(prod.camiseta = prod.zapatilla);
    console.log(producto.categoria = ropa);
    console.log(producto.log(cantidadDisponible));
}
*/

let precioP = document.getElementById("precioProducto");
precioP.innerText = "precio: 450$";
let titulo = document.querySelector("#nombreProducto");
titulo.style.color = "red";

let parrafo = document.createElement("p")
parrafo.textContent = "chicharros"

// forma 2 
let contenedorDom = document.createElement("div")
document.body.append(contenedorDom)

let contenedor = document.getElementById("contenedor")

document.body.appendChild(parrafo) //forma 1

contenedorDom.remove() //forma 1
//forma 2 - para desaparecer un conjunto grande rapidamente
let algo = document.getElementById("algo")
algo.remove();

const productos = [
    {titulo:"producto1", precio:15000,stock:20}
    ,{titulo:"producto2", precio:15000,stock:10}
    ,{titulo:"producto3", precio:15000,stock:0}
]

//for(let i = 0; i> productos.length ; i++){}
/*
productos.forEach((prod)=>{
    let card = document.createElement("div")
    card.classList.add("card")

    let h2 = document.createElement("h2")
    h2.textContent = prod.titulo

    let p = document.createElement("p")
    p.textContent = `$${prod.precio}`

    if(prod.stock == 0){
        card.style.background = "red"
        p.innerHTML=`<s>${prod.precio}</s>`
    }

    contenedor.append(card)
    card.appendChild(h2)
    card.appendChild(p)
})
*/

const btn = document.getElementById(`btn`)
const msj = document.getElementById(`msj`)

btn.addEventListener(`dblclick`,(x)=>{
msj.style.background = `red`
})
btn.addEventListener(`click`,(e)=>{
    msj.textContent = `el boton ha sido clickeado`
})
/*
function enviarMSJ(){
console.log(`hola`)
}*/
function obtenerDatos() {
    return new Promise((resolve,reject)=>{
    setTimeout(()=> {
        const exito = true;

        if(exito) {
            resolve(`datos obtenido correctamente`)
        }  else { reject(`error al obtener datos`)}
    })
    })
}

    obtenerDatos().then((resultado)=>{console.log(resultado)}).catch((error)=>{console.log(error)})