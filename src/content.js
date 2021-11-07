const generatorWhiteList = {
  STUDIO: true,
  Webflow: true,
  'Wix.com Website Builder': true,
};

(function () {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const nodeList = document.getElementsByName('generator');
  let message = 'others';
  if (nodeList && nodeList[0]) {
    const generator = nodeList[0].content;
    if (generatorWhiteList[generator]) message = generator;
    chrome.runtime.sendMessage({ message, isDark });
  } else {
    const targetElement = document.getElementById('shopify-features');
    const isShopify = typeof targetElement !== 'undefined';
    if (isShopify) message = 'Shopify';
    chrome.runtime.sendMessage({ message, isDark });
  }
})();
