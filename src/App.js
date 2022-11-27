import { Banner } from "./components/Banner";
import { Background } from "./components/Background";
import { Diagnosis } from "./components/Diagnosis";
import { Disorder } from "./components/Disorder";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Banner />
      <Background />
      <Diagnosis />
      <Disorder />
    </div>
  );
}

export default App;
