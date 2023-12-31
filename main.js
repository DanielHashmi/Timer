let milli = 0;
let sec = 0;
let min = 0;
let hr = 0;

let timer = false;

let start = document.getElementsByClassName('start')[0];
let stop = document.getElementsByClassName('stop')[0];
let reset = document.getElementsByClassName('reset')[0];

start.addEventListener('click', () => {
    timer = true;
    myFun()
})
stop.addEventListener('click', () => {
    timer = false;
})
reset.addEventListener('click', () => {
    timer = false;
    myFun()
    location.reload()
})


function myFun() {
    if (timer == true) {
        milli = milli + 1;
        if (milli == 100) {
            sec = sec + 1;
            milli = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
        }
        let getSec = sec;
        let getMin = min;
        let getHr = hr;

        if (sec < 10) {
            getSec = "0" + sec
        }
        if (min < 10) {
            getMin = "0" + min
        }
        if (hr < 10) {
            getHr = "0" + hr
        }

        setTimeout(myFun, 10)
        document.getElementsByClassName('milli')[0].innerHTML = milli;;
        document.getElementsByClassName('sec')[0].innerHTML = getSec;;
        document.getElementsByClassName('min')[0].innerHTML = getMin;;
        document.getElementsByClassName('hr')[0].innerHTML = getHr;;
    }
}