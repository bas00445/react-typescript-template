import { ReactComponent as ReactIcon } from "@/assets/react.svg";

function App() {
  return (
    <div className="container p-10 flex flex-col gap-10">
      <ReactIcon width={80} height={80} />
      <div className="text-blue-800 font-bold text-xl">
        React Typescript Template
      </div>
    </div>
  );
}

export default App;
