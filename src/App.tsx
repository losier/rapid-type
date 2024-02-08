import GenerateWords from "./components/GenerateWords";
import RestartButton from "./components/RestartButton";
import Result from "./components/Result";
import UserTyping from "./components/UserTyping";
import WordsContainer from "./components/WordsContainer";
import CountdownTimer from "./components/CountdownTimer";

import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helpers";

const App = () => {
  const { words, typed, timeLeft, errors, state, restart, totalTyped } =
    useEngine();

  return (
    <>
      <CountdownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GenerateWords key={words} words={words} />
        <UserTyping
          className="absolute inset-0"
          words={words}
          userInput={typed}
        />
      </WordsContainer>
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={restart}
      />
      <Result
        className="mt-10"
        state={state}
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
    </>
  );
};

export default App;
