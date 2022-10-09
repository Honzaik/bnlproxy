console.log('huhuh');

chrome.action.onClicked.addListener((tab) => {
  console.log('here');
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
  
});
