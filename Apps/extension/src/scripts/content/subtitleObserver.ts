let script: string = ""; 
let speakers: { [key: string]: string[] } = {}; // Object to store each speaker's sentences
let lastSpeaker: string = ""; 

export const observeSubtitles = (): void => {
  const subtitleContainer = document.body.querySelector(".iOzk7[jsname='dsyhDe']") as HTMLElement | null;

  if (subtitleContainer) {
    // Subtitle processing logic...
    const subtitleObserver = new MutationObserver(() => {
      const subtitles = subtitleContainer.querySelectorAll(".iTTPOb span") as NodeListOf<HTMLSpanElement>;
      const speakerName = (subtitleContainer.querySelector(".zs7s8d") as HTMLElement)?.textContent?.trim() || "";

      subtitles.forEach(span => {
        const text = span.textContent?.trim() || "";
        if (!speakers[speakerName] || !speakers[speakerName].includes(text)) {
          script += `${lastSpeaker !== speakerName ? `\n${speakerName}: ` : ''}${text} `;
          speakers[speakerName] = speakers[speakerName] || [];
          speakers[speakerName].push(text);
          lastSpeaker = speakerName;

          // Print the line by line conversation
         
chrome.runtime.sendMessage({ type: "log", text: `${speakerName}: ${text}` });

        }
      });
      chrome.runtime.sendMessage({ type: "log", text: script });

    });

    subtitleObserver.observe(subtitleContainer, { childList: true, subtree: true });
  } else {
    console.error("Subtitle container not found.");
  }
};
