import { faker } from "@faker-js/faker";


const words = faker.random.words(10);

function App() {
  return <GenerateWords words={words} />;
}

const GenerateWords = ({ words }: { words: string }) => {
  return <div className="text-4xl text-center text-slate-500">{words}</div>;
};


export default App;
