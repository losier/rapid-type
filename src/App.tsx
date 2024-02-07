import { faker } from "@faker-js/faker";

import GenerateWords from "./components/GenerateWords";
import RestartButton from "./components/RestartButton";
import Result from "./components/Result";

const words = faker.random.words(10);

function App() {
  return (
    <>
      <CountDownTimer timeLeft={30} />
      <GenerateWords words={words} />
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={() => null}
      />
      <Result
        errors={2}
        accuracyPercentage={98}
        total={100}
        className={"mt-10"}
      />
    </>
  );
}

const CountDownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return (
    <h2 className="text-primary-400 font-medium">Time left: {timeLeft}</h2>
  );
};

export default App;
