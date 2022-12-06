import throttle from "lodash.throttle";
import Player from '@vimeo/player';


const STORAGE_VIMEO_KEY = 'videoplayer-current-time';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onPlay ({seconds}) {
    localStorage.setItem(STORAGE_VIMEO_KEY,JSON.stringify(seconds));
 };
 
    
 player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_VIMEO_KEY) || "0"))
 
 
 player.on('timeupdate',throttle(onPlay, 1000))
