let video = document.getElementsByClassName("video")[0];
let quitar = document.getElementById("quitarVideo");
let chekpoint = document.getElementsByClassName("video_checkpoint")[0];
let chekpoint2 = document.getElementsByClassName("video_checkpoint")[1];
let continuar = document.getElementById("continuar");
let firstTime = true;
let buttonPressed = false

function isInViewport(element) {
    var rect = element.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener("scroll", function() {
    if (isInViewport(chekpoint) || isInViewport(chekpoint2)) {
        video.classList.add("in_place");
        video.classList.remove("video_floating");
        quitarVideo.style.display = "none";
        firstTime = false;
        buttonPressed = false
    } else {
        if (firstTime == false && buttonPressed == false) {
            video.classList.add("video_floating");
            video.classList.remove("in_place");
            quitarVideo.style.display = "block";
        }
    }
});

function quitar() {
    buttonPressed = true;
    video.classList.add("in_place");
    video.classList.remove("video_floating")
}