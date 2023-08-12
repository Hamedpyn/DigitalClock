// Select Dom Elements

let hour = document.querySelector('#hour'),
    minutes = document.querySelector('#minute'),
    seconds = document.querySelector('#seconds');

setInterval(() => {
    // get every hour , minute and second 
    let nowHour = new Date().getHours()
    let nowMinute = new Date().getMinutes()
    let nowSecond = new Date().getSeconds()

    // save them in their html element
    hour.innerHTML = nowHour
    minutes.innerHTML = nowMinute
    seconds.innerHTML = nowSecond
}, 1000);