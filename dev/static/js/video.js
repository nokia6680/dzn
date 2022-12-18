var videoOpener = document.getElementsByClassName('js-video');
var elNodes = document.querySelectorAll(".js-video");
var videoPopup = document.querySelector('.popup-video');
var videoCloser = document.querySelector('.popup-video__closer');
var videoPlayer = document.querySelector('.popup-video__frame');

for (var i = 0; i < videoOpener.length; i++) {
    var videoBtn = videoOpener[i];
    videoBtn.addEventListener("click", function() {
        videoPopup.classList.add('is-active');
        body.classList.add('no-scroll');
    });
}

videoCloser.onclick = function() {
    videoPopup.classList.remove('is-active');
    body.classList.remove('no-scroll');

    if (videoPlayer.src.startsWith("https://player.vimeo.com/")) {
        videoPlayer.contentWindow.postMessage('{"method":"pause"}', "*");
    }
};
