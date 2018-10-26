window.addEventListener("load",initComponentes);

/*
tarea capturar el listener precio y la cantidad
y cambiar el importe
*/

function initComponentes(){
    var btnAgregar=document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click",agregarProducto);

    var inputCantidad=document.getElementById("inputCantidad");
    inputCantidad.addEventListener("keyup",calcularTotal);


    var inputPrecioUnitario=document.getElementById("inputPrecioUnitario");
    inputPrecioUnitario.addEventListener("keyup",calcularTotal);

    // para utilizar el this del eventlistener
    //inputPrecioUnitario.addEventListener("keyup",function(){
    //    console.log(this.value);
    //} );
    

}

function calcularTotal(){
    var inputCantidad=document.getElementById("inputCantidad");
    var inputPrecioUnitario=document.getElementById("inputPrecioUnitario");
    var inputImporte=document.getElementById("inputImporte");


    inputImporte.value=parseFloat(inputCantidad.value)*parseFloat(inputPrecioUnitario.value);

}

function agregarProducto(){
    var tabla=document.getElementById("tabla");
    var selectProducto=document.getElementById("selectProducto");
    var inputCantidad=document.getElementById("inputCantidad");
    var inputPrecioUnitario=document.getElementById("inputPrecioUnitario");
    var inputImporte=document.getElementById("inputImporte");

    var fila=document.createElement("tr");

    var columnaItem=document.createElement("td");
    var columnaProducto=document.createElement("td");
    var columnaCantidad=document.createElement("td");
    var columnaPrecioUnitario=document.createElement("td");
    var columnaImporte=document.createElement("td");

    columnaItem.innerHTML=tabla.rows.length;
    columnaProducto.innerHTML=selectProducto.options[selectProducto.selectedIndex].text
    columnaCantidad.innerHTML=inputCantidad.value;
    columnaPrecioUnitario.innerHTML=inputPrecioUnitario.value;
    
    columnaImporte.innerHTML=parseFloat(inputCantidad.value)*parseFloat(inputPrecioUnitario.value);
    fila.append(columnaItem);
    fila.append(columnaProducto);
    fila.append(columnaCantidad);
    fila.append(columnaPrecioUnitario);
    fila.append(columnaImporte);

    tabla.appendChild(fila)
    

}