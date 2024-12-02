const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function updateTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if (h<10) {
        h = "0"+h;
    }
    if (m<10) {
        m = "0"+m;
    }
    if (s<10) {
        s = "0"+s;
    }

    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;
}

updateTime();
setInterval(updateTime, 1000);


