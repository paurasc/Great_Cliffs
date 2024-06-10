function currentTime(){
    var d = new Date();
    var hr=d.getHours();
    var min=d.getMinutes();
    var sec=d.getSeconds();
    var ampm;

    if (sec<10){
        sec="0"+sec;
    }
    if(min<10){
        min="0"+min;
    }
    //determin am or pm string
    if(hr==12){
        ampm="PM"
    } else if(hr>12){
        hr-=12;
        ampm="PM";
    } else {
        ampm="AM";
    }
    var time = hr+":"+min+":"+sec+" "+ampm;
    document.getElementById("clock").innerText=time;
}
    currentTime();
    //Run time data function every 1 second
    setInterval(currentTime,1000);