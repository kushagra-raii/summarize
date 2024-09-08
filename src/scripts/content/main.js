import { observeMeetingStart } from "./meetingObserver";


const initializeScript = () => { 
  observeMeetingStart();   
  // observeSubtitles();        
};

initializeScript();
  


//chrome.runtime.sendMessage({ type: "log", text: "Hello jee" });
