var audio = document.getElementById('audio');
var playpause = document.getElementById("play");

function togglePlayPause() {
   if (audio.paused || audio.ended) {
      playpause.title = "Pause";                                                                                                                     /*player {background: none;text-align: center;font-family: FontAwesome;color: #fff;font-size: 26px;line-height: 26px;width: 216px;height: 35px;position: asolute;bottom: 100px;left: 48%;transform: translate(-50%, 0);z-index: 10;transition: all 0.3s ease-in;border-spacing: 0;}*/
      audio.play();
   } else {
      playpause.title = "Play";
      audio.pause();
   }
}
