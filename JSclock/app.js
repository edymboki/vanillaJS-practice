//@ts-check

let display = document.getElementById("display");

function showTime() {
    //Including the ingredients that we will need
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let majira = "AM";

    //For a 12 hour clock, need the following hour format;
    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h -= 12;
        majira = "PM";
    }

    //To get rid of the single digit format we do the following;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    //Now to assemble it all into one coherent time format;
    let time = h + ":" + m + ":" + s + " " + majira;

    //And now to set the time to display in the browser;
    display.innerText = time;

    //Lastly, to invoke the function a a second in advance before calling the function for synchronization;
    setTimeout(showTime, 1000);
}

//Now the fun part, invoking the function;
showTime();