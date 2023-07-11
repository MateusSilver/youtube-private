const form1 = document.querySelector('.form2');
console.log('using titles');
form1.addEventListener('submit', async (event) => {
    event.preventDefault();
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: blurChannel
    });
});

const blurChannel = () => {
    console.log('entrou');
    
    var titles = document.querySelectorAll(".yt-simple-endpoint.style-scope.yt-formatted-string");
    for(var i=0; i<titles.length; i++){
        titles[i].innerHTML = "********";
    }

}