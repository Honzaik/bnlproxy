chrome.action.onClicked.addListener((tab) => {
  if (tab.url?.startsWith("chrome://")) return undefined; //no errors on chrome:// urls
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
});

