var numero1=27;
var numero2=2;


var auxiliar=numero1;
var dividendo=0;
var residuo
for(let i=0;i<numero1;i++){
    dividendo=i;

    if(auxiliar>=numero2) {
        auxiliar= auxiliar-numero2;
         
    }else{
        residuo=auxiliar;
        break
    }

}

console.log( `${numero1}/${numero2} es ${dividendo} con residuo ${residuo} ` );
