import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductContainer from "./components/ProductContainer";

function App() {
  const [searchValue, setSearchValue] = useState();
  return (
    <div className="App">
      {/* <Header setSearchValue={setSearchValue} /> */}
      <ProductContainer searchQuery={searchValue} />
    </div>
  );
}

export default App;
