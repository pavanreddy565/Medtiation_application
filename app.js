const app=()=>{

};
app();
var current=600-1;
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
    let nu = 0;
    let increment = 875 / (current);
    var timeLeft = setInterval(() => {
        if (current == 0||current==current+1) {
            clearInterval(timeLeft);
        }
        minutesLeft(current, nu);
        nu += increment;
        current--;
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
        let time_int = parseInt(time_str,10);
        //console.log(time_int);
        if(no_of_digits(time_int) == 1){
            document.getElementById("time").innerHTML ='0'+time_int+":00";
        }else{
            document.getElementById("time").innerHTML =time_int+":00";
        }current=time_int*60-1;
        document.querySelector('circle').style.strokeDashoffset = 0;
        //clearInterval(timeLeft);


    }

    //Timer(600);
