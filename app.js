let p = document.querySelector("p");
let center = document.querySelector(".center");

center.addEventListener("click", (e) => {
  e.stopPropagation;
  console.log(e.target);
});
