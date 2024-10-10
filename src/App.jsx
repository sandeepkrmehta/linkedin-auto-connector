import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const connectWithAll = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "connectAll" }, (response) => {
          if (chrome.runtime.lastError) {
            console.error("Error sending message:", chrome.runtime.lastError.message);
          }
        });
      }
    });
  };

  const stopConnecting = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "stopConnecting" });
      }
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>LinkedIn Auto Connector</h1>
      <button onClick={connectWithAll} style={{
        padding: '10px 20px',
        backgroundColor: '#0073b1',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginRight: '10px'
      }}>
        Connect with All
      </button>
      <button onClick={stopConnecting} style={{
        padding: '10px 20px',
        backgroundColor: '#ff4d4d',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Stop
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
