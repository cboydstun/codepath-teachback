'use strict';

const e = React.createElement;

function Counter() {
    const [count, setCount] = React.useState(0);
    return e(
        'div',
        null,
        e('p', null, `The count is : ${count}`),
        e(
            'button',
            { onClick: () => setCount(count + 1) },
            'Increment'
        ),
        e('button',
            { onClick: () => setCount(count - 1) },
            'Decrement'
        )
    );
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Counter));