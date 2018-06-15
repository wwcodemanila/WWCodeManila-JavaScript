window.addEventListener('load', function() {
  var landscape = document.querySelector("#landscape");
  var landscapeMoving = [
    { transform: 'translate3D(0, 0, 0)' }, 
    { transform: 'translate3D(-1606px, 0, 0)' }
  ];
  var landscapeTiming = {
    duration: 5000,
    iterations: Infinity
  };
  landscape.animate(landscapeMoving, landscapeTiming);

  var hotAirBalloon = document.querySelector("#hot-air-balloon img")
  var hotAirBalloonMoving = [
    { transform: 'translateY(0)' }, 
    { transform: 'translateY(50px)' },
    { transform: 'translateY(0)' }, 
  ];

  var hotAirBalloonTiming = {
    duration: 2000,
    iterations: Infinity
  };
  hotAirBalloon.animate(hotAirBalloonMoving, hotAirBalloonTiming);
});