// Add js here.
var video = document.querySelector("#videoplayer")

// Initialize the video variable and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	video = document.querySelector("#videoplayer")
	video.autoplay = false;
	video.loop = false;
});

// play video
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// pause video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
})

// slow down, playbackrate
document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow down the video")
    if (video.playbackRate == 2){
        video.playbackRate = 1;
    }
    else if (video.playbackRate == 1){
        video.playbackRate = 0.5;
    }
    else {
        alert("Video is at slowest speed!");
    }
	console.log("speed is ", video.playbackRate);
})

// faster
document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed up the video");
    if (video.playbackRate == 0.5){
        video.playbackRate = 1;
    }
    else if (video.playbackRate == 1){
        video.playbackRate = 2;
    }
    else {
        alert("Video is at fastest speed!");
    }
	console.log("speed is ", video.playbackRate);
})

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip ahead 15 sec");
	video.currentTime += 15;
    //go back to the start and reset the video play function
	if (video.ended) {
		video.currentTime = 0;
        video.pause();
        video.playbackRate = 1;
	}
	console.log("Video current time is", video.currentTime)
});

// volume slider
document.querySelector('#slider').addEventListener('change', function(){
	// allow user to slide when muted but maintain value 0 when video is muted
    if (video.muted){
        var volume = 0;
        document.getElementById("volume").innerHTML = volume + "%";
        console.log("Volume is ");
    }
    // When video is not muted, the value will change dynamically according to the input
    else {
        video.volume = this.value / 100;
        var volume = video.volume * 100;
        document.getElementById("volume").innerHTML = volume + "%";
        console.log("Volume is ");
    }
});

// mute and unmute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		// FALSE indicates audio should be turned on, default
		video.muted = true;
		// TRUE indicates the sound should be turned offfor the video
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Video muted");
        //change the volumn to 0
        var volume = 0;
        document.getElementById("volume").innerHTML = volume + "%";
        console.log("Volume is ");
	}
	else {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
        console.log("Video unmuted");
        var volume = document.querySelector("#slider").value;
        //change the volumn info back to the slider value
        video.volume = volume / 100;
        document.getElementById("volume").innerHTML = volume + "%";
        console.log("Volume is ");
	}
});

