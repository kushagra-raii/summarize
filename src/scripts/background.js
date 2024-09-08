chrome.runtime.onMessage.addListener((message, sender) => {
    if (message.type === "log") {
      console.log(message.text);  // Logs to the extension's background page console
    }
  });
  