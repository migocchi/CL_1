document.querySelectorAll('.butterfly').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    
    var randomX1 = Math.floor(Math.random() * (901));

    var maxY1 = 450;
    var minY1 = 350;
    var randomY1 = Math.floor(Math.random() * (maxY1 - minY1 + 1)) + minY1;

    // ランダムな位置を代入
    el.style.left = randomX1 + "px";
    el.style.top = randomY1 + "px";

  });
});

document.querySelectorAll('.enemy').forEach(function (en) {
  en.addEventListener('mouseover', function () {
    
    var maxX2 = 800;
    var minX2= 350
    var randomX2 = Math.floor(Math.random() * (maxX2 - minX2 + 1)) + minX2;

    var maxY2 = 300;
    var minY2 = 190;
    var randomY2 = Math.floor(Math.random() * (maxY2 - minY2 + 1)) + minY2;

    // ランダムな位置を代入
    en.style.left = randomX2 + "px";
    en.style.top = randomY2 + "px";

  });
});