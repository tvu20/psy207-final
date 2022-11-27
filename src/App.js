import { Banner } from "./components/Banner";
import { Background } from "./components/Background";
import { Diagnosis } from "./components/Diagnosis";
import { Disorder } from "./components/Disorder";
import { Treatments } from "./components/Treatments";
import { References } from "./components/References";
import { Footer } from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Banner />
      <Background />
      <Diagnosis />
      <Disorder />
      <Treatments />
      <References />
      <Footer />
    </div>
  );
}

export default App;
