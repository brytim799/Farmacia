class medicamento{
    constructor(cod, precio,cant){
        this.cod=cod
        this.precio=precio
        this.cant=cant
    }

setCod(cod){
    this.cod=cod
}
getCod(){
    return this.cod
}
setPrecio(precio){
    this.precio=precio
}
getPrecio(){
   return this.precio
}
setCant(cant){
    this.cant=cant
}
getCant(){
   return this.cant
}

total(){
    return this.precio*this.cant
}

}