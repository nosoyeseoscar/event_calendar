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
   /*  console.log(`el día a transformar es: ${day}`);
    console.log(`la hora a tranformar 2 es: ${time}`); */
    time ? newTime=time:  newTime='00:00'
    const full = `${day}T${newTime}`
    //console.log(`fecha completa : ${full}`);
  return full
    
}

function addHour(hour) {
     // Descomponer el string en horas, minutos y segundos
    const [hh, mm, ss] = hour.split(':').map(Number);

    // Sumar una hora y ajustar los valores si es necesario
    let nuevaHora = hh + 1;
    if (nuevaHora >= 24) {
        nuevaHora -= 24;
    }

    // Convertir a formato de dos dígitos (agregar ceros a la izquierda si es necesario)
    const nuevaHoraStr = nuevaHora.toString().padStart(2, '0');
    const nuevoMinutoStr = mm.toString().padStart(2, '0');
    const nuevoSegundoStr = ss.toString().padStart(2, '0');

    // Unir los componentes en el nuevo string de hora
    const nuevaHoraCompleta = `${nuevaHoraStr}:${nuevoMinutoStr}:${nuevoSegundoStr}`;

    return nuevaHoraCompleta;
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



