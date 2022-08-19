let hourEl=document.getElementById('hour');
let minuteEl=document.getElementById('minutes');
let secondEl=document.getElementById('seconds');
let ampmEl=document.getElementById('ampm');

function updateClock(){
    let hou= new Date().getHours();
    let min=new Date().getMinutes();
    let sec=new Date().getSeconds();
    let ampm='AM'

    if (hou >12){
        hou = hou - 12;
        ampm="PM"
    }

    hou = hou<10? "0" + hou : hou;
    
    min= min<10? "0" + min : min;
    
    sec = sec<10? "0" + sec : sec;
    
    
    hourEl.innerText = hou;
    minuteEl.innerText = min;
    secondEl.innerText = sec;
    ampmEl,(innerText = ampm);
    
    setTimeout(() => {
        updateClock()
    }, 1000);


}

updateClock();