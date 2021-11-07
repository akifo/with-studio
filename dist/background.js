chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === 'STUDIO') {
    chrome.browserAction.setIcon({
      path: {
        16: 'icons/studio-active-16.png',
        48: 'icons/studio-active-48.png',
        128: 'icons/studio-active-128.png',
      },
      tabId: sender.tab.id,
    });
  } else if (message === 'Webflow') {
    chrome.browserAction.setIcon({
      path: {
        16: 'icons/webflow-active-16.png',
        48: 'icons/webflow-active-48.png',
        128: 'icons/webflow-active-128.png',
      },
      tabId: sender.tab.id,
    });
  } else {
    chrome.browserAction.setIcon({
      path: {
        16: 'icons/studio-inactive-16.png',
        48: 'icons/studio-inactive-48.png',
        128: 'icons/studio-inactive-128.png',
      },
      tabId: sender.tab.id,
    });
  }
});
