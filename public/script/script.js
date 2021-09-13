// Temporary values to store positions
let place1;
let place2;

// Nodelists of stone positions and grid cells
const stones = document.querySelectorAll('.white span');
const grid = document.querySelectorAll('ul li');

// Click handler for stones, switch positions of stones based on index
grid.forEach(stone => {
  stone.addEventListener('click', function() {
    if(stone.classList.contains('stone')) {
      stone.classList.add('active');
      place1 = stone.dataset.index;
      console.log('Position1:' + place1);
    } else {
      place2 = stone.dataset.index;
      console.log('Position2:' + place2);
      const item1 = document.querySelector(`[data-index="${place1}"] span`);
      const item2 = document.querySelector(`[data-index="${place2}"]`);
      const item3 = document.querySelector(`[data-index="${place1}"]`);
      item1.remove();
      item3.classList.remove('stone');
      item3.classList.remove('active');
      item2.insertAdjacentHTML('beforeend', '<span>●</span>');
    }
  })
})
