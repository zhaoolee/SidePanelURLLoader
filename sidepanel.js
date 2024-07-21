const urlInput = document.getElementById('url');
const submitButton = document.getElementById('submit');
const iframe = document.getElementById('content-frame');

function loadUrl() {
  const url = urlInput.value;
  console.log('Attempting to load URL:', url);
  if (url) {
    iframe.src = url;
    console.log('iframe.src set to:', iframe.src);
  }
}

submitButton.addEventListener('click', function() {
  console.log('Button clicked');
  loadUrl();
});

urlInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    console.log('Enter key pressed');
    loadUrl();
  }
});

// 确保脚本已加载
console.log('Script loaded');