document.querySelector('body').addEventListener('click', changeBg);

bgVideos = ["./vid/INNORECORDSPhotoVideos.mp4", "./vid/KarolinaGrabowskaBluringRose.mp4", "./vid/pixabayBird.mp4", "./vid/Pixabay-CherryBlossoms.mp4", "./vid/pixabayLotus.mp4", "./vid/pixabayRose.mp4"]

function getRandomVideo() {
    return bgVideos[Math.floor(Math.random()*bgVideos.length)];
}

function changeBg() {
    document.querySelector('#background-video').src = getRandomVideo();
}