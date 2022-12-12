const triggerDarkmode = document.querySelector('input[name="darkmode"]');
let options = { darkmode: false };

chrome.storage.sync.get(options, function (items) {
  if (items.darkmode) {
    triggerDarkmode.checked = true;
    document.body.setAttribute("theme", "dark");
  } else {
    document.body.setAttribute("theme", "light");
  }
});

triggerDarkmode.addEventListener("change", function () {
  options.darkmode = triggerDarkmode.checked;
  chrome.storage.sync.set(options, function () {});
  location.reload();
});
