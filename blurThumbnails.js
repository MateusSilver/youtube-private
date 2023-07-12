const form = document.querySelector('#form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: blurThumbnails
    });
});

const blurThumbnails = () => {
    const thumbs = document.querySelectorAll('.yt-core-image');
    
    thumbs.forEach((thumb) => thumb.src = 'https://www.pngmagic.com/product_images/black-background-for-youtube-thumbnail.jpg'
    );
}