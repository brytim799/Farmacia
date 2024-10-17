import IMed from "./Cl_IMedicamento.js";
export default class Farmacia {
    // atributos
    ventaTotal = 0; //total de la venta
    ventaMenor = Infinity; //el medicamento menos vendido
    ventaMayor = 0; //el medicamento mas vendido


    ventaMedicamento() {
        let v = new IMed(); //  clase IMedicamento
        let cod = v.leerCodigdo(); //leer el codigo del medicamento
        let venta = v.leerPrecio(); //leer el precio del medicamento
        let cant = v.leerCant();    //leer la cantidad vendida

        // calcular venta mayor y menor
        if (cant > this.ventaMayor) {     
            this.ventaMayor = cant;
        }
        if (cant < this.ventaMenor) {
            this.ventaMenor = cant;
        }

        // calcular total de la venta
        this.ventaTotal = this.ventaTotal + (cant * venta);
        // generar el reporte
        return v.reporteMedicamento(cod, venta, cant);
    }

    // Motra el resumen de las ventas
    resumen () {
        return `
        <br> La venta total fue de: ${this.ventaTotal}
        <br> El medicamento mas vendido fue: ${this.ventaMayor}
        <br> El medicamento menos vendido fue: ${this.ventaMenor}
        `
    }



}