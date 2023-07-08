
function displaytime() {  
    const currentDate = new Date ()
    const currentHour = currentDate.getHours(); 
    const currentMinute = currentDate.getMinutes(); 
    const currentSecond = currentDate.getSeconds(); 
    if (currentHour.toString().length=1) {
        currentHour = currentHour.replace(/^/, '0')
    }
    let time = `${currentHour}:${currentMinute}:${currentSecond}`
    document.getElementById("timedisplay").innerHTML = time
}
setInterval(displaytime, 1000)
