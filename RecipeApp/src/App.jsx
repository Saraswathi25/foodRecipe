import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetail from "./components/FoodDetail";
import Hero from "./components/Hero";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState(658920);

  return (
    <>
      <Navbar />
      <Hero foodData={foodData} setFoodData={setFoodData} />

      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodId={foodId} />
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
