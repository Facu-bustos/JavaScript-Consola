let savePIN = '1973';

function login() {

 let ingresar = false;
for (let i = 2; i >=0;         i--) {
    let userPIN = prompt ('Ingresa tu PIN. Tenes '+(i+1)+' intentos');
    if (userPIN === savePIN) {
        alert('ingreso exitoso. Bienvenido fan del helado');
        ingresar = true;
        break;
    }else{
        alert('Error. Te quedan ' + i + ' intentos.')
    }
}
    return ingresar;
}
if(login()){
    //*Accedemos al catalogo
    let tipoHelados = 3;
    let opcion = prompt ('Elegi una opción: \n1-1KG. \n2-2KG \n3-3KG \n4-Presiona MENTA para finalizar');
    while (opcion !='MENTA'&&opcion!='menta' ) {
        switch(opcion){
        case '1':
            alert('¡Me gusta tu eleccion!');
            break;
        case '2':
            alert('¡Me gusta tu eleccion!');
            break;
           
        case '3':
            alert ('¡Me gusta tu eleccion!');
            break;
        default: 
        alert('¡No existe esta opción!');
        break;

        }
        opcion = prompt ('Elegi una opción: \n1-Chocolate y Dulce de leche. \n2- Frutilla y naraja \n3-Limon y Menta \n4-Que esperas para abonar y disfrutar del rico helado. Escribi MENTA para finalizar');
        
}
        
}else{
    //Excelente eleccion, a comer! 
    alert('Le erraste a tu contraseña varias veces.');
}

alert ( 'Gracias vuelva prontos');