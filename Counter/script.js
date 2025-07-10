// index.js
let count = 0;

document.getElementById("Decreasebtn").onclick = function () {
  count -= 1;
  document.getElementById("counter").innerHTML = count;
};

document.getElementById("Resetbtn").onclick = function () {
  count = 0;
  document.getElementById("counter").innerHTML = count;
};

document.getElementById("Increasebtn").onclick = function () {
  count += 1;
  document.getElementById("counter").innerHTML = count;
};
