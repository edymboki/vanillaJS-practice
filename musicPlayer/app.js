let songs = ["song1.mp3", "song2.mp3", "song3.mp3"];
let posters = ["poster1.jpg", "poster2.jpg", "poster3.jpg"];

let songTitle = $("#song-title");
let fillBar = $("#fill");
let songPoster = $("#image img");
let bgPoster = $("#bg img");

let currentSong = 0;
let song = new Audio();

window.onload = playSong;

const playPromise = song.play();

if(playPromise !== null) {
    playPromise.catch(function(){
        song.play();
    })
}


$("#play").on('click', playOrPauseSong);
$("#back").on('click', back);
$("#next").on('click', next);

function playSong() {
    let songPath = "songs/" + songs[currentSong];
    song.src = songPath;
    songTitle.innerText = songs[currentSong];
    song.play();
}

function playOrPauseSong() {
    if(song.paused){
        song.play();
        $("#play img").attr("src", "icons/pause.png");
    } else {
        song.pause();
        $("#play img").attr("src", "icons/play.png");
    }
}

song.addEventListener("timeupdate", function() {
    let position = song.currentTime / song.duration;
    // console.log('' + (position * 100) + '%')
    fillBar.style.width = '' + (position * 100) + '%';
})

function next() {
    currentSong++;
    let songPath = "songs/" + songs[currentSong];
    let posterPath = "posters/" + posters[currentSong];
    if(currentSong > songs.length - 1) {
        currentSong = 0;
    }
    playSong();
    $("#play img").attr("src", "icons/pause.png");
    songPoster.attr("src", posterPath);
    bgPoster.attr("src", posterPath);
}

function back() {
    currentSong--;
    let songPath = "songs/" + songs[currentSong];
    let posterPath = "posters/" + posters[currentSong];
    if(currentSong < 0) {
        currentSong = 2;
    }
    playSong();
    $("#play img").attr("src", "icons/pause.png");
    songPoster.attr("src", posterPath);
    bgPoster.attr("src", posterPath);
}