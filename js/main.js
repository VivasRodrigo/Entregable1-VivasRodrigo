//declaro las constantes:
const casachica= 40000;
const casagrande= 50000;
const departamentochico= 20000;
const departamentogrande = 30000;

const basico= 1;
const completo= 1.2;
const full= 1.4;

//declaro una función:
function producto(a, b){
    return a * b;
}
//declaro un Array de objetos
const cliente =[]

//inicio del programa
alert("Bienvenidos a nuestro sitio");
let nombre= String(prompt("Introduce tu nombre completo:"));
cliente.push({Nombre: nombre});

let tipoviv= Number(prompt("Que tipo de vivienda quieres cotizar: 1) Casa.  2) Departamento (introduce el número de la opción deseada)"));

while(tipoviv != "1" && tipoviv != "2"){
        tipoviv= Number(prompt("Favor de introducir una opción correcta: 1) Casa.  2) Departamento"));
}
if(tipoviv == 1){
    cliente.push({Tipo: "Casa"});
    metros= Number(prompt("Cuantos Metros cuadrados posee la casa? (introduce un número)"));
    chequeo= metros/metros;
    while(chequeo != 1){
        metros= Number(prompt("Cuantos Metros cuadrados posee la casa? (introduce un número)"));
        chequeo= metros/metros;
    }

    } else{
        cliente.push({Tipo: "Departamento"});
        metros= Number(prompt("Cuantos Metros cuadrados posee el departamento? (introduce un número)"));
        chequeo= metros/metros;
        while(chequeo != 1){
            metros= Number(prompt("Cuantos Metros cuadrados posee el departamento? (introduce un número)"));
            chequeo= metros/metros;
    }}
    cliente.push({Metros: metros});


let tipoplan = Number(prompt("Que tipo de seguro deseas: 1) Básico.  2) Completo.  3) Full."));

while(tipoplan != "1" && tipoplan != "2" && tipoplan != "3"){
tipoplan= Number(prompt("Favor de introducir una opción correcta: 1) Básico.  2) Completo.  3) Full"));
}
if(tipoplan === 1){
        cliente.push({Seguro: "Básico"});
    }else if(tipoplan === 2){
        cliente.push({Seguro: "Completo"});
    }else{
        cliente.push({Seguro: "Full"});
    }


if(tipoviv === 1){
    if(metros <=150){
        if(tipoplan === 1){
        cotizacion= producto(casachica,basico);
    }else if(tipoplan === 2){
        cotizacion= producto(casachica,completo);
    }else{
        cotizacion= producto(casachica,full);
    }}else if(metros >=151){
            if(tipoplan === 1){
            cotizacion= producto(casagrande,basico);
        }else if(tipoplan === 2){
            cotizacion= producto(casagrande,completo);
        }else{
            cotizacion= producto(casagrande,full);
    }}} else{
        if(metros <=80){
            if(tipoplan === 1){
            cotizacion= producto(departamentochico,basico);
        }else if(tipoplan === 2){
            cotizacion= producto(departamentochico,completo);
        }else{
            cotizacion= producto(departamentochico,full);
        }}else if(metros >=81){
                if(tipoplan === 1){
                cotizacion= producto(departamentogrande,basico);
            }else if(tipoplan === 2){
                cotizacion= producto(departamentogrande,completo);
            }else{
                cotizacion= producto(departamentogrande,full);
        }}}
    
        cliente.push({Precio: cotizacion});

console.log(cliente);

alert("Gracias "+nombre+" por cotizar con nosotros. El precio del seguro para tu hogar es de: "+cotizacion+" pesos mensuales");


