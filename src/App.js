import React, { useState } from 'react';

function App() {
  // const count = 0;
  const [count, setCount] = useState(0);

  const add = () => setCount(count + 1);
  const minus = () => setCount(count - 1);
  const reset = () => setCount(0);

  if (count < 0) {
    alert("Negative numbers aren't supported");
    reset();
  }

  return (
    <div style={styles.container}>
      <h1>Click Counter</h1>
      <p>Count: {count}</p>

    <div>
      <button onClick={add}>Add</button>
      <button onClick={minus}>Minus</button>
      <button onClick={reset}>Reset</button>
    </div>
    </div>

  );
}

const styles = {
  container : {
    textAlign: 'center',
  },

  heading : {

  }
}

export default App;
