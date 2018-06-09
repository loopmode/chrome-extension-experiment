let page = document.getElementById("buttonDiv");

constructOptions(["white", "#3aa757", "#e8453c", "#f9bb2d", "#4688f1"]);

function constructOptions(colors) {
  for (let colorValue of colors) {
    let button = document.createElement("button");
    button.style.backgroundColor = colorValue;
    button.addEventListener("click", function() {
      chrome.storage.sync.set({ color: colorValue }, function() {
        console.log("color is " + colorValue);
      });
    });
    page.appendChild(button);
  }
}
