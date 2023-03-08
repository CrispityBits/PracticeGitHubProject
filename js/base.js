function rotateDiv() {
  let div = document.getElementById('spinTime'); 
  let slider = document.getElementById('spinSlider')

  let rotation = 0;
  setInterval(function() {
    div.style.transform = `rotate(${rotation}deg)`;
    rotation += parseInt(slider.value) * 1.5;
  }, 25);
}

document.getElementById('spinSlider').addEventListener('input', function() {
  let slider = document.getElementById('spinSlider')
  let audio = document.getElementById('funky')

  audio.playbackRate=(parseInt(slider.value) / 5)
})

rotateDiv()