// Select Dom Elements

let hour = document.querySelector('#hour'),
    minutes = document.querySelector('#minute'),
    seconds = document.querySelector('#seconds');

setInterval(() => {
    // get every hour , minute and second 
    let nowHour = new Date().getHours() + 1
    let nowMinute = new Date().getMinutes()
    let nowSecond = new Date().getSeconds()

    // if it was less than 10 , add a 0 besides it ( 01 )
    if (nowHour < '10') {
        nowHour = '0' + nowHour
    } else if (nowMinute < '10') {
        nowMinute = '0' + nowMinute
    } else if (nowSecond < '10') {
        nowSecond = '0' + nowSecond
    }

    // save them in their html element
    hour.innerHTML = nowHour
    minutes.innerHTML = nowMinute
    seconds.innerHTML = nowSecond
}, 1000);