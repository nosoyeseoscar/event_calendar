const extractDate = (date) => {
    //function to extract date in format yyyy-mm-dd
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
}

const todayDate = ()=>{
    return extractDate(new Date())
}

function generarID() {
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    const milisegundos = fecha.getMilliseconds();
    const numeroAleatorio = Math.floor(Math.random() * 1000);
  
    const id = parseInt(`${anio}${mes}${dia}${hora}${minutos}${segundos}${milisegundos}${numeroAleatorio}`, 10);
    return id;
}

function fullDate (day, time){
    let newTime =''
    //console.log(`el día a transformar es: ${day}`);
    //console.log(`el día a tranformar 2 es: ${time}`);
    time ? newTime=time:  newTime='00:00'
    const full = `${day}T${newTime}:00`
    //console.log(`fecha completa : ${full}`);
  return full
    
}

function addHour(hour) {
    const newHour = new Date(`1970-01-01T${hour}:00`)
    newHour.setHours(newHour.getHours() + 1)
  
    const returnHour = newHour.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    return returnHour
}

function currentHour () {
    /* Función que retorna el tiempo actual con minutos en cero */
    const now = new Date()
    now.setMinutes(0)
    now.setSeconds(0)
    now.setMilliseconds(0)
    const localOffset = now.getTimezoneOffset() * 60000; // Convertimos el offset a milisegundos
    const localTime = now.getTime() - localOffset; // Obtenemos el tiempo local
    const localDate = new Date(localTime); // Creamos una nueva instancia con el tiempo local
    const hour = localDate.toISOString().slice(11, 19)
    return hour
}

export {extractDate, todayDate, generarID, fullDate, addHour, currentHour}



