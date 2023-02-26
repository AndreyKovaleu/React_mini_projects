import React, { useState } from "react";
import Game from "./components/Game";
import Result from "./components/Result";

import './index.scss'

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const questions = [
    {
      title: 'React - это ... ?',
      variants: ['библиотека', 'фреймворк', 'приложение'],
      correct: 0,
    },
    {
      title: 'Компонент - это ... ',
      variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
      correct: 1,
    },
    {
      title: 'Что такое JSX?',
      variants: [
        'Это простой HTML',
        'Это функция',
        'Это тот же HTML, но с возможностью выполнять JS-код',
      ],
      correct: 2,
    },
  ];

  const onClickVariant = (index) => {
    // console.log(index);
    setStep(prevStep => prevStep + 1)

    if (index === questions[step].correct) {
      setCount(prevCount => prevCount + 1);
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length ?
          <Game
            questions={questions}
            step={step}
            onClickVariant={onClickVariant} /> :
          <Result questions={questions} count={count} />
      }
    </div>
  );
}

export default App;
