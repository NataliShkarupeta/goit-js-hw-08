import throttle from "lodash.throttle";
import Player from '@vimeo/player';


const STORAGE_VIMEO_KEY = 'videoplayer-current-time';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onPlay (data) {
   localStorage.setItem(STORAGE_VIMEO_KEY,JSON.stringify(data));
};

   
player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_VIMEO_KEY)).seconds)
.then(function(seconds) {
   
}).catch(function(error) {
   switch (error.name) {
       case 'RangeError':
           // the time was less than 0 or greater than the video’s duration
           break;

       default:
           // some other error occurred
           break;
   }
});

player.on('timeupdate',throttle(onPlay, 1000))
