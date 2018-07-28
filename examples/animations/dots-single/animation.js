window.addEventListener('load', function() {
  var dot = document.querySelector('.dot');
  var keyframes = [
    {transform: 'rotate(0deg) translate(80px)'},
    {transform: 'rotate(360deg) translate(80px)'}
  ];

  var timing = {
    duration: 2500,
    iterations: Infinity,
    direction: 'alternate',
    easing: 'ease-in-out',
  };
  var dotAnimation = dot.animate(keyframes, timing);
});