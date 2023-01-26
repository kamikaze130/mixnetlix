function toggleVideo () {
    const trailer = document.querySelector('trailer')
    const video = document.toggle('video')
    trailer.classList.toggle('active')

    video.currentTime = 0;
    video.pause()
}