/*let p = document.querySelector("p");
let center = document.querySelector(".center");

center.addEventListener("click", (e) => {
  e.stopPropagation;
  console.log(e.target);
});*/

var tabs = document.querySelectorAll(".tabs a");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (e) {
    var li = this.parentNode;
    var div = this.parentNode.parentNode.parentNode;

    if (li.classList.contains("active")) {
      return false;
    }

    // on retire la classe active de l'onglet actif
    div.querySelector(".tabs .active").classList.remove("active");

    //j'ajoute la classe active a l'onglet actuel
    li.classList.add("active");

    //on retire la class active sur le contenu actif
    console.log(div.querySelector(".tabs-content .active"));
    div.querySelector(".tab-content.active").classList.remove("active");

    //j'ajoute la classe active au bon div
    div.querySelector(this.getAttribute("href")).classList.add("active");

    // let tag = this.hash;

    // let textTag = document.querySelector(tag);

    // if (textTag.classList.contains(".active")) {
    //   return true;
    // }
    // var divText = div.querySelector(".center div");
    // console.log(divText);

    // textTag.classList.add("active");
    // console.log(textTag);

    //recheck after
  });
}
//dans la boucle
