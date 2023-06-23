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

function fullDate (date, time){

  return new Date(`${date}T${time}:00`);
    
}

export {extractDate, todayDate, generarID, fullDate}



