// get the increment and decrement buttons
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

// state using vanilla JavaScript
function main() {
    let count = 0;

    // handle clicks on the increment button
    incrementButton.addEventListener('click', function () {
        count++;
        render();
    });

    // handle clicks on the decrement button
    decrementButton.addEventListener('click', function () {
        count--;
        render();
    });

    /**
     * `render()` is a function that simply updates the HTML
     * element with the id of `count` to display the current value
     */
    function render() {
        document.getElementById('count').innerHTML = `The count is : ${count}`;
    }

    render();
}

main();