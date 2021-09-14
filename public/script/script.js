// Temporary values to store positions
let place1;
let place2;

// Nodelists of stone positions and grid cells
const stones = document.querySelectorAll('.white span');
const cells = document.querySelectorAll('ul li');
const grid = document.querySelector('ul');
const closeButton = document.querySelector('.buttons button');
const notification = document.querySelector('.invalid');

// Click handler for stones, switch positions of stones based on index
cells.forEach(stone => {
  stone.addEventListener('click', function() {
    if(stone.classList.contains('stone')) {
      stone.classList.add('active');
      place1 = stone.dataset.index;
      console.log('Position1:' + place1);
    } else {
      place2 = stone.dataset.index;
      console.log('Position2:' + place2);
      moveposition();
    }
  })
})

closeButton.addEventListener('click', function() {
  notification.classList.remove('show');
  grid.classList.remove('diffuse');
})


/**
 * Function to handle positions of the stones based on event listener clicks
 * @param item1 - Span (stone) in first selected cell
 * @param item2 - Second selected cell
 * @param item3 - Whole stone cell
 */

function moveposition() {
  if(place2 < place1) {

        // Select stone positions
        const item1 = document.querySelector(`[data-index="${place1}"] span`);
        const item2 = document.querySelector(`[data-index="${place2}"]`);
        const item3 = document.querySelector(`[data-index="${place1}"]`);

        // remove stones
        item1.remove();
        item3.classList.remove('stone');
        item3.classList.remove('active');
        item2.insertAdjacentHTML('beforeend', '<span>●</span>');
        item2.classList.add('stone');

        if(item3.classList.contains('two')) {
          item2.classList.add('two');
        }
      } else {
        notification.classList.add('show');
        grid.classList.add('diffuse');
      }
}