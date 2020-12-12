var $car = document.querySelector('img');

var offSet = [$car.offsetLeft, $car.offsetTop];
var intervalId = null;

var carDirection = {
  currentDirection: 'east',
  location: offSet,
};

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowDown') {
    $car.className = 'south';
    carDirection.currentDirection = 'south';
  }
  if (e.key === 'ArrowLeft') {
    $car.className = 'west';
    carDirection.currentDirection = 'west';
  }
  if (e.key === 'ArrowUp') {
    $car.className = 'north';
    carDirection.currentDirection = 'north';
  }
  if (e.key === 'ArrowRight') {
    $car.className = 'east';
    carDirection.currentDirection = 'east';
  }
  if (e.key === ' ') {
    intervalId = setInterval(startCar, 16)
  }
});

function startCar () {
  offSet[0] = $car.offsetLeft;
  offSet[1] = $car.offsetTop;
  $car.style.left = offSet[0] + 100 + 'px';
  carDirection.location = offSet;
}
