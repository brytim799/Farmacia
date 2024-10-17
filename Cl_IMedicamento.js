export default class IMedicamento{
    
    // leer el codido/nombre del medicamento
    leerCodigdo(){
        return prompt("ingrese el codigo del medicamento") //this.cod
    }

    // leer el precio del medicamento
    leerPrecio(){
        return prompt("ingrese el precio del medicamento") //this.precio  
    }
    
    // leer la cantidad vendida
    leerCant(){
        return prompt("ingrese la cantidad vendida") //this.cant
    }   

    // generar el reporte
    reporteMedicamento(cod, precio, cant) {
        return  `
        <br> Codigo Medicamento: ${cod}
        <br> Precio: ${precio}
        <br> Cantidad: ${cant}
        <br> Total: ${cant*precio}
        `
    }

}