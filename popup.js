let changeColor = document.getElementById("changeColor");

changeColor.addEventListener("input", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    args: [changeColor.value],
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});
  
function setPageBackgroundColor(arg1) {
    document.body.style.backgroundColor = arg1
}