window.addEventListener('load', function() {
  var dots = document.querySelectorAll('.dot');
  for (var i = 0; i < dots.length; ++i) {
    var dot = dots[i];
    var start = (i / dots.length) * 360;
    var keyframes = [
      {transform: 'rotate(' + start + 'deg) translate(80px)'},
      {transform: 'rotate(' + (360-(i*5)) + 'deg) translate(80px) '},
    ];

    var timing = {
      duration: 2500,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out',
    };
    dot.animate(keyframes, timing);
  }
});