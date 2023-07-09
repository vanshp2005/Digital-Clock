
function displaytime() {  
    let currentDate = new Date ()
    let currentHour = currentDate.getHours(); 
    let currentMinute = currentDate.getMinutes(); 
    let currentSecond = currentDate.getSeconds(); 
    currentHour = (currentHour < 10) ? "0" + currentHour : currentHour
    currentMinute = (currentMinute <10) ? "0" + currentMinute : currentMinute; 
    currentSecond = (currentSecond < 10) ? "0" + currentSecond : currentSecond; 
    let time = `${currentHour}:${currentMinute}:${currentSecond}`
    document.getElementById("timedisplay").innerHTML = time
}
setInterval(displaytime, 1000)
