import { ReactComponent as ReactIcon } from "@/assets/react.svg";
import Test from "@/components/Test";

function App() {
  return (
    <div className="container p-10">
      <Test />
      <ReactIcon width={40} height={40} />
      <div className="text-blue-800 font-bold text-xl">
        React Typescript Template
      </div>
    </div>
  );
}

export default App;
