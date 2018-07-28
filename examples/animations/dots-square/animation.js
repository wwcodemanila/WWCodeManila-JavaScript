window.addEventListener('load', function() {
  var dot = document.querySelector('.dot');
  var keyframes = [
    {
      background: '#508b1a',
      transform: 'none',
      easing: 'ease-out',
    },
    {
      offset: 0.1,
      transform: 'translateY(200px)',
      easing: 'ease-in-out',
    },
    {
      offset: 0.2,
      transform: 'translate(200px, 200px)',
      easing: 'ease-in-out',
    },
    {
      offset: 0.4,
      transform: 'translateX(200px)',
      easing: 'ease-out',
    },
    {
      background: '#551a8b',
      transform: 'none',
    }
  ];

  var timing = {
    duration: 4000,
    iterations: Infinity
  };
  var dotAnimation = dot.animate(keyframes, timing);
});