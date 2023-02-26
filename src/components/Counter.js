import React, { useState } from 'react'

function Counter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    // console.log("increment");
    setCount(prevCount => prevCount + 1);
  }

  function decrement() {
    // console.log("decrement");
    setCount(prevCount => prevCount - 1);
  }

  return (
    <div>
      <h2>Счетчик:</h2>
      <h1>{count}</h1>
      <button className="minus" onClick={decrement}>- Минус</button>
      <button className="plus" onClick={increment}>Плюс +</button>
    </div>
  )
}

export default Counter