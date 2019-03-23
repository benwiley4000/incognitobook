function onUrl(msg) {
  if (msg.incognitoUrl) {
    chrome.windows.create({
      url: msg.incognitoUrl,
      incognito: true
    });
  }
}

chrome.runtime.onMessage.addListener(onUrl);
