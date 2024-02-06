const playlistID = "" //get from env

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({playlistId: `${playlistID}`}, function() {
      console.log('Playlist ID set');
    });
  });

