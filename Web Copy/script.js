console.log("loading page...");

function accept(id) {
  var element = document.querySelector(id);
  element.remove();
}

function firstImg(e) {
  e.src = "./images/assets/succulents-1.jpg"
}

function secImg(e) {
  e.src = "./images/assets/succulents-2.jpg"
}