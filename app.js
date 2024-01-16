const app=()=>{

};
app();
var current=600-1;
var timeLeft,time_int;
var value=1;
let nu,nui;
const main_ele=document.querySelector('.app')
function videoChange(event) {
    var button = event.target.closest('button');
    var videoSource = button.dataset.video;
    var bgcolor = button.dataset.color;
    if (videoSource) {
        document.getElementById('vidsource').src = videoSource;
        document.getElementById('myVideo').load();
        main_ele.style.backgroundColor = bgcolor;
    } else {
        console.error('Error: Video source is not defined.');
    }
}

function no_of_digits(n){
    let num=0;
    
    if(n==0){
      return 1;
    }let num1=n;
    while(n>=1){
      num++;
      n=n/10;
      
    }return num;
  }
  function Timer() {
    nu = 0;
    
    
    let increment = 875 / (current);
    buttonChange();
    timeLeft = setInterval(() => {
        minutesLeft(current, nu);
        nu += increment;
        nui=nu;
        current--;
        console.log(current);
        if (current == 0||current==time_int*60-1||current==599||value==0) {
            clearInterval(timeLeft);
            if(value){
                document.querySelector('circle').style.strokeDashoffset = 0;
            }
            
            return;
        }
    }, 1000);
  }
    function minutesLeft(sec, dashoffset) {
        var minutes = Math.floor(sec / 60);
        if (no_of_digits(minutes) == 1) {
            minutes = '0' + minutes;
        }
        var seconds = sec % 60;
        if (no_of_digits(seconds) == 1) {
            seconds = '0' + seconds;
        }
        document.querySelector('circle').style.strokeDashoffset = dashoffset;
        document.getElementById("time").innerHTML = (minutes + ":" + seconds);
    };
    function timeSetter(event){
        let time_s=event.target;
        
        let [time_str,b]=time_s.textContent.split(" ");
        //console.log(time_str);
        time_int = parseInt(time_str,10);
        //console.log(time_int);
        if(no_of_digits(time_int) == 1){
            document.getElementById("time").innerHTML ='0'+time_int+":00";
        }else{
            document.getElementById("time").innerHTML =time_int+":00";
        }current=time_int*60-1;
        document.querySelector('circle').style.strokeDashoffset = 0;
        revert();


    }
    function revert(){
        if(time_int){
            current=time_int*60;
        }else{
            current=10*60;
        }
        if(value){
            console.log(value);
            buttonChange();
        }
        
    }
    function buttonChange(){
        var play_pause=document.querySelector('.play-pause');
        var funi=play_pause.dataset.fun
        if(parseInt(funi)){
            play_pause.src="./svg/play.svg";
            play_pause.onclick=Timer;
            play_pause.dataset.fun=0;
            value=0;
        }else{
            play_pause.src="./svg/pause.svg";
            play_pause.onclick=Pause;
            play_pause.dataset.fun=1;
            value=1;
        }
    }
    function Pause(){
        //value=0;
        buttonChange();
    }

    //Timer(600);
