import { Banner } from "./components/Banner";
import { Background } from "./components/Background";
import { Diagnosis } from "./components/Diagnosis";
import { Disorder } from "./components/Disorder";
import { Treatments } from "./components/Treatments";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Banner />
      <Background />
      <Diagnosis />
      <Disorder />
      <Treatments />
    </div>
  );
}

export default App;
