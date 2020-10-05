let btn = document.querySelector(".num-layer");
let output = document.querySelector(".output");
let egale = document.querySelector(".egale");
let plus = document.querySelector(".plus");
var total = 0;

plus.addEventListener("click", () => {
  total += parseInt(output.innerText);
  console.log(total);
  output.innerText = "";
});

egale.addEventListener("click", () => {
  output.innerText = "";
  console.log(total);
  console.log('total');
  console.log(total);
});

output.innerText = "";
btn.addEventListener("click", (e) => {
  if (!e.target.closest("button")) {
    return;
  }
  const key = e.target.textContent;
  console.log(key);
  output.innerText += key;
});

//https://www.youtube.com/watch?v=f0SG2j6d-Kg
