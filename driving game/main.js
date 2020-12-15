var $car = document.querySelector('img');

var intervalId = null;

var carDirection = {
  currentDirection: 'east',
  x: 0,
  y: 0,
  carStarted: false
};

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowDown') {
    $car.className = 'south';
    carDirection.currentDirection = 'south';
    return;
  }
  if (e.key === 'ArrowLeft') {
    $car.className = 'west';
    carDirection.currentDirection = 'west';
    return;
  }
  if (e.key === 'ArrowUp') {
    $car.className = 'north';
    carDirection.currentDirection = 'north';
    return;
  }
  if (e.key === 'ArrowRight') {
    $car.className = 'east';
    carDirection.currentDirection = 'east';
    return;
  }
  if (e.key === ' ' && carDirection.carStarted === false) {
    intervalId = setInterval(startCar, 16);
    carDirection.carStarted = true;
    return;
  }
  if (e.key === ' ' && carDirection.carStarted === true) {
    clearInterval(intervalId);
    carDirection.carStarted = false;
  }
});

function startCar() {
  if (carDirection.currentDirection === 'east') {
    carDirection.x += 5;
  }
  if (carDirection.currentDirection === 'west') {
    carDirection.x -= 5;
  }
  if (carDirection.currentDirection === 'south') {
    carDirection.y += 5;
  }
  if (carDirection.currentDirection === 'north') {
    carDirection.y -= 5;
  }
  $car.style.left = carDirection.x + 'px';
  $car.style.top = carDirection.y + 'px';
}
