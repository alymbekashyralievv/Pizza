import React, { useState } from "react";
import Header from "./components/header/Header";
import Button from "./components/button/Button";

const App = () => {
  const [activeButton, setActiveButton] = useState(null);
  const buttons = [
    {
      id: 1,
      name: "Все",
    },
    {
      id: 2,
      name: "Сырные",
    },
    {
      id: 3,
      name: "Мясные",
    },
    {
      id: 4,
      name: "Гриль",
    },
    {
      id: 5,
      name: "Вегетарианские",
    },
    {
      id: 6,
      name: "Острые",
    },
    {
      id: 7,
      name: "Закрытые",
    },
  ];
  return (
    <div>
      <Header />
      <div>
        <Button
          name="Все"
          isActive={activeButton === "Все"}
          onClick={() => setActiveButton("Все")}
        />
        <Button
          name="Мясные"
          isActive={activeButton === "Мясные"}
          onClick={() => setActiveButton("Мясные")}
        />
        {buttons.map((btn) => {
          return <Button key={btn.id} name={btn.name} />;
        })}
      </div>
    </div>
  );
};

export default App;
