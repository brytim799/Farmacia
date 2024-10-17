/*
EJERCICIO LA FARMACIA

Una farmacia desea procesar al final del día las ventas de cada uno de los medicamentos para obtener algunas estadísticas. Por cada medicamento se solicita: Código del medicamento, precio, cantidad vendida, se requiere:
Calcular el monto vendido por medicamento.
También debe reportarse por la farmacia: cuál medicamento fue el menos destacado (el que se vendió menos) y el monto total vendido.

*/

// Clase Farmacia
import Farmacia from "./Cl_Farmacia.js";

//  Clase Interfaz Medicamento
let Farm = new Farmacia();

// Llamando a la venta de medicamentos
let salida = document.getElementById("salida");
for (let i = 0; i < 3; i++) {
    // mostrar las ventas
    salida.innerHTML = salida.innerHTML + Farm.ventaMedicamento() + "<br>";
}

// mostrar el resumen
let resumen = document.getElementById("resumen");
resumen.innerHTML = Farm.resumen();

