// constants
// cached element references
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const input = document.querySelector('input');
const count = document.getElementById('count');

// event listeners
add.addEventListener('click', function(){
    parseInt(count);
    parseInt(input.value);
    count.innerText = parseInt(count.innerText) + parseInt(input.value);
    negative();
})

subtract.addEventListener("click", function () {
  parseInt(count);
  parseInt(input.value);
  count.innerText = parseInt(count.innerText) - parseInt(input.value);
  negative();
});

// functions

function negative () {
    if (parseInt(count.innerText) < 0) {
        count.style.color = 'red';
    } else {
        count.style.color = 'black';
    }
}