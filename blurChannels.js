const form = document.querySelector('.form2');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: blurChannels
    });
});

const blurChannels = () => {
    const channels = document.querySelectorAll('.ytd-channel-name');
    channels.forEach((channel) => channel.innerHTML = '************'
    );
}