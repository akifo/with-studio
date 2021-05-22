chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === 'STUDIO') {
    chrome.browserAction.setIcon({
      path: {
        16: 'icons/icon-active-16.png',
        48: 'icons/icon-active-48.png',
        128: 'icons/icon-active-128.png',
      },
      tabId: sender.tab.id,
    });
  } else {
    chrome.browserAction.setIcon({
      path: {
        16: 'icons/icon-inactive-16.png',
        48: 'icons/icon-inactive-48.png',
        128: 'icons/icon-inactive-128.png',
      },
      tabId: sender.tab.id,
    });
  }
});
