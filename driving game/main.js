var carDirection = {
  currentDirection: 'east'
};

var $car = document.querySelector('img');

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
});
