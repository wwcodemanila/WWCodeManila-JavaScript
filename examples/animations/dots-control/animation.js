window.addEventListener('load', function() {
  var dot = document.querySelector('.dot');
  var keyframes = [
    {transform: 'rotate(0deg) translate(80px)'},
    {transform: 'rotate(360deg) translate(80px)'},
  ];

  var timing = {
    duration: 2500,
    iterations: Infinity
  };
  var dotAnimation = dot.animate(keyframes, timing);

  
  document.getElementById('pause').addEventListener('click', function() { 
    dotAnimation.pause();
  });
  
  document.getElementById('play').addEventListener('click', function() { 
    dotAnimation.play(); 
  }); 

  document.getElementById('reverse').addEventListener('click', function() { 
    dotAnimation.reverse(); 
  });

  document.getElementById('cancel').addEventListener('click', function() { 
    dotAnimation.cancel(); 
  }); 
});