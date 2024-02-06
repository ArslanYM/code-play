//requires premium spotify

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("playButton").addEventListener("click", function () {
    chrome.storage.sync.get("playlistId", function (data) {
      if (data.playlistId) {
        chrome.tabs.query(
          {
            active: true,
            currentWindow: true,
            url: ["http://*/*", "https://*/*"],
          },
          function (tabs) {
            if (tabs && tabs.length > 0) {
              var tabId = tabs[0].id;
              chrome.scripting.executeScript({
                target: { tabId: tabId },
                function: playPlaylist,
                args: [data.playlistId],
              });
            } else {
              alert("Unable to find active tab.");
            }
          }
        );
      } else {
        alert("Please set the playlist ID in extension options.");
      }
    });
  });
});

function playPlaylist(playlistId) {
  const SPOTIFY_API_TOKEN ="" //get from env
  fetch(
    `https://api.spotify.com/v1/me/player/play?context_uri=spotify:playlist:${playlistId}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${SPOTIFY_API_TOKEN}`,
      },
    }
  );
}
