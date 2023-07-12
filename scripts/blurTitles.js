const form1 = document.querySelector('#form1');

form1.addEventListener('submit', async (event) => {
    event.preventDefault();
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: blurTitles
    });
});

const blurTitles = () => {
    var titles = document.querySelectorAll(".yt-simple-endpoint.focus-on-expand.style-scope.ytd-rich-grid-media");
    titles.forEach((title) => title.innerHTML = "********");
}