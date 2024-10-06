chrome.runtime.onMessage.addListener((message: any, sender: chrome.runtime.MessageSender): void => {
  if (message.type === "log") {
    console.log(message.text);  // Logs to the extension's background page console
  }
});
