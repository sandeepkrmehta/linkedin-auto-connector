let shouldConnect = true;

const connectWithAll = () => {
  const connectButtons = Array.from(document.querySelectorAll('button')).filter(btn => btn.textContent.trim() === "Connect");
  console.log("Detected connect buttons:", connectButtons);
  
  if (connectButtons.length === 0) {
    alert("No profiles to connect.");
    return;
  }

  connectButtons.forEach((btn, index) => {
    setTimeout(() => {
      if (shouldConnect) {
        btn.click();
        console.log("Clicked connect button for profile:", index + 1);
      }
    }, index * 2000);
  });
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "connectAll") {
    shouldConnect = true;
    connectWithAll();
  }
  if (request.action === "stopConnecting") {
    shouldConnect = false;
    console.log("Connection attempts have been stopped.");
  }
});

const observer = new MutationObserver(() => {
  const connectButtons = Array.from(document.querySelectorAll('button')).filter(btn => btn.textContent.trim() === "Connect");
  console.log("Detected connect buttons:", connectButtons);
  
  if (connectButtons.length > 0) {
    observer.disconnect();
    connectWithAll();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
