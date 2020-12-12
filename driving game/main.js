var $car = document.querySelector('img');

var carDirection = {
  currentDirection: 'east',
  x: positionX,
  y: 0
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

var positionX = 0;

var intervalId = null;

function startCar () {
  positionX += 5;
  $car.style.left = positionX + 'px';
}
