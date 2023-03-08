let nombre = prompt(`ingresa tu nombre`);
let monto = parseInt(prompt(`ingresa el monto al cual quieres acceder`));
let cuotas = parseInt(prompt(`ingresa en cuantas cuotas lo quieres abonar (3,6,12,18,24)`));
let resultado = 0;

if(cuotas===3){
    resultado=((monto*30/100)+monto)/3;
    alert(`hola ${nombre} el plan de pago seleccionado tiene un recargo de 30% y abonará 3 pagos de $${resultado.toFixed(2)}`);
}else if(cuotas===6){
  resultado=((monto*35/100)+monto)/6;
    alert(`hola ${nombre} el plan de pago seleccionado tiene un recargo de 35% y abonará 6 pagos de $${resultado.toFixed(2)}`);
}else if (cuotas===12){
 resultado=((monto*40/100)+monto)/12;
    alert(`hola ${nombre} el plan de pago seleccionado tiene un recargo de 40% y abonará 12 pagos de $${resultado.toFixed(2)}`);
}else if(cuotas===18){
     resultado=((monto*50/100)+monto)/18;
    alert(`hola ${nombre} el plan de pago seleccionado tiene un recargo de 50% y abonará 18 pagos de $${resultado.toFixed(2)}`);
}else if(cuotas===24){
 resultado=((monto*80/100)+monto)/24;
    alert(`hola ${nombre} el plan de pago seleccionado tiene un recargo de 80% y abonará 24 pagos de $${resultado.toFixed(2)}`);
}else {
    alert(`el numero de cuotas ingresado no es valido`);
}