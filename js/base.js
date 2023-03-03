function rotateDiv() {
  let div = document.getElementById('spinTime'); 

  let rotation = 0;
  setInterval(function() {
    div.style.transform = `rotate(${rotation}deg)`;
    rotation += 1;
  }, 25);
}

rotateDiv()