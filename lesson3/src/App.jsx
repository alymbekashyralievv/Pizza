import React, { useState } from "react";
import Header from "./components/header/Header";
import Button from "./components/button/Button";
import "./App.css";
import Check from "./components/check/Check";
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

const App = () => {
  const [activeBtn, setActiveBtn] = useState();

  return (
    <div className="container">
      <Header />

      <div className="filter-buttons">
        {buttons.map((btn) => {
          return (
            <Button
              onClick={() => {
                setActiveBtn(btn.name);
              }}
              activeBtn={activeBtn}
              key={btn.id}
              name={btn.name}
            />
          );
        })}
      </div>
      <Check />
    </div>
  );
};

export default App;
