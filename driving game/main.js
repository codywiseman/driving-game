var carDirection = {

}

var $car = document.querySelector('img');

document.addEventListener('keydown', function(e) {
  if(e.key === 'ArrowDown') {
    $car.className = 'south';
  }
  if (e.key === 'ArrowLeft') {
    $car.className = 'west';
  }
  if (e.key === 'ArrowUp') {
    $car.className = 'north';
  }
  if (e.key === 'ArrowRight') {
    $car.className = 'east';
  }
})
