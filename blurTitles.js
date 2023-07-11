const form1 = document.querySelector('.form1');
console.log('using titles');
form1.addEventListener('submit', async (event) => {
    event.preventDefault();
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: blurTitles
    });
});

const blurTitles = () => {
    console.log('entrou');
    
    var titles = document.querySelectorAll(".yt-simple-endpoint.focus-on-expand.style-scope.ytd-rich-grid-media");
    for(var i=0; i<titles.length; i++){
        titles[i].innerHTML = "********";
    }

}