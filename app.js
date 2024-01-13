const app=()=>{

};
app();
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


