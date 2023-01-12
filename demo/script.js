const state = { count: 0 };

// render function
function render() {
    const counter = document.createElement('p');
    counter.textContent = `Count: ${state.count}`;

    const incrementButton = document.createElement('button');
    incrementButton.textContent = 'Increment';
    incrementButton.onclick = increment;

    const decrementButton = document.createElement('button');
    decrementButton.textContent = 'Decrement';
    decrementButton.onclick = decrement;

    const app = document.getElementById('app');
    app.innerHTML = '';
    app.appendChild(counter);
    app.appendChild(incrementButton);
    app.appendChild(decrementButton);
}

// increment function
function increment() {
    state.count++;
    render();
}

// decrement function
function decrement() {
    state.count--;
    render();
}

// initial render
render();