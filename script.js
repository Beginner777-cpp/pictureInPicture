const video = document.getElementById('video');
const button = document.querySelector('.button');
async function getMedia() {
    const media = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = media;
    video.onloadedmetadata = () => {
        video.play();
    }
}
getMedia()
button.addEventListener('click', async () => {
    button.disabled = true;
    await video.requestPictureInPicture();
    button.disabled = false;
})