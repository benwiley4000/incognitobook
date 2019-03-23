document.addEventListener('click', function(e) {
  var a = e.path.find(function(element) {
    return (
      element.tagName === 'A' &&
      element.getAttribute('target') === '_blank'
    );
  });
  if (a) {
    e.preventDefault();
    chrome.runtime.sendMessage({ incognitoUrl: a.getAttribute('href') });
  }
});
