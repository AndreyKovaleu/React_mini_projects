import React from 'react'

function Game({ questions, step, onClickVariant }) {
  const percent = Math.round(step / questions.length * 100);
  const question = questions[step];

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((item, i) => <li onClick={() => onClickVariant(i)} key={i}>{item}</li>)
        }
      </ul>
    </>
  )
}

export default Game