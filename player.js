const remote = require('electron').remote;
const win = remote.getCurrentWindow();
var video = document.getElementById('#triggervideo');

video.addEventListener('loadedmetadata', function() {
    if(video.readyState == video.duration){
      win.destroy();
    }
});