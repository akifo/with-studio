chrome.runtime.onMessage.addListener(
  ({ message, isDark }, sender, sendResponse) => {
    console.log(message, isDark);
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
    } else if (message === 'Shopify') {
      chrome.browserAction.setIcon({
        path: {
          16: 'icons/shopify-active-16.png',
          48: 'icons/shopify-active-48.png',
          128: 'icons/shopify-active-128.png',
        },
        tabId: sender.tab.id,
      });
    } else if (message === 'Wix.com Website Builder') {
      if (isDark) {
        chrome.browserAction.setIcon({
          path: {
            16: 'icons/wix-dark-active-16.png',
            48: 'icons/wix-dark-active-48.png',
            128: 'icons/wix-dark-active-128.png',
          },
          tabId: sender.tab.id,
        });
      } else {
        chrome.browserAction.setIcon({
          path: {
            16: 'icons/wix-light-active-16.png',
            48: 'icons/wix-light-active-48.png',
            128: 'icons/wix-light-active-128.png',
          },
          tabId: sender.tab.id,
        });
      }
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
  }
);
