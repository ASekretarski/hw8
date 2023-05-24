import Vimeo from "@vimeo/player";
var throttle = require('lodash.throttle');
console.log(throttle)

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});




player.on('timeupdate', (event) => {
    console.log(event.seconds)
    function setTime() { localStorage.setItem("videoplayer-current-time", event.seconds) }
    throttle(setTime(), 1000)

})

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))