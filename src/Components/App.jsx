import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeDisplay from "./RecipeDisplay";
import RecipeInput from "./RecipeInput";
import AppNav from "./AppNav";

function App() {
  return (
    <BrowserRouter>
      <div>
        <AppNav />
        <Routes>
          <Route path="/" element={<RecipeDisplay />} />
          <Route path="/recipeinput" element={<RecipeInput />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
