const form2 = document.querySelector('#form2');

form2.addEventListener('submit', async (event) => {
    event.preventDefault();
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: blurChannel
    });
});

const blurChannel = () => {
    var channelName = document.querySelectorAll(".style-scope.ytd-channel-name");
    channelName.forEach((name) => name.innerHTML = "--------");
}