let ON_CALL = false;

export const detectMeetingStart = (observer: MutationObserver): void => {
  const meetElement = document.body.querySelector("div[jscontroller='kAPMuc']");
  
  if (meetElement) {
    ON_CALL = true;
    chrome.runtime.sendMessage({ type: "log", text: "Hello jee" });

    alert("Please turn on Captions to continue summarizing");
    observer.disconnect(); // Stop observing after the meeting starts
  } else {
    ON_CALL = false;
  }
};

export const observeMeetingStart = (): void => {
  const observer = new MutationObserver(() => {
    detectMeetingStart(observer);
  });
  
  observer.observe(document.body, { subtree: true, childList: true });
};
