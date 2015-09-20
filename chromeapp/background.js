chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    'innerBounds': {
      'width': screen.availWidth,
      'height': screen.availHeight
    }
  });
});