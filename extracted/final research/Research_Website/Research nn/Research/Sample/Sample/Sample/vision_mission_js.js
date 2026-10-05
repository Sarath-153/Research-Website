
function flipCard(element) {
    const card = element.closest(".flip-card");
    const video = card.querySelector("video");

    card.classList.toggle("flipped");

    if (card.classList.contains("flipped")) {
        video.play();
    } else {
        video.pause();
        video.currentTime = 0;
    }
}






