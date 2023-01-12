import React, { useState } from 'react';

export function Example() {
  // Declare a new state variable, which we'll call "count"
  // and set its initial value to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}