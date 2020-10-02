let btn = document.querySelector(".num-layer");
let output = document.querySelector(".output");

output.innerText = "";
btn.addEventListener("click", (e) => {
  if (!e.target.closest("button")) {
    return;
  }
  const key = e.target.textContent;
  console.log(key);
  output.innerText += key;
});
