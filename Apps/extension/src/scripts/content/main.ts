import { observeMeetingStart } from "./meetingObserver";
import { observeSubtitles } from "./subtitleObserver";

const initializeScript = (): void => { 
  observeMeetingStart();
  observeSubtitles();        
};

initializeScript();

// chrome.runtime.sendMessage({ type: "log", text: "Hello jee" });
