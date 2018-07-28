var bgIndex = 0;

function changeBackground() {
  var rainbow = [ "#ff9696", "#ffd5a1", "#d4ffb2", "#d8edff", "#ecc9ff" ];

  document.body.style.backgroundColor = rainbow[bgIndex];
  bgIndex = (bgIndex + 1) % rainbow.length;
}
