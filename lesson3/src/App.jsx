import React, { useState } from "react";
import Header from "./components/header/Header";
import Button from "./components/button/Button";
import "./App.css";
import Check from "./components/check/Check";
import Foods from "./components/main/Foods";

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

const foods = [
  {
    image: "https://react-pizza-v2-psi.vercel.app/assets/img/products/4.png",
    name: "Ветчина и сыр",
    composition: "Ветчина, моцарелла, фирменный соус альфредо",
    price: "180 c",
  },

  {
    image: "https://react-pizza-v2-psi.vercel.app/assets/img/products/12.png",
    name: "Миу-пицца с ветчиной и сюрприз",
    composition:
      "Ветчина, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо",
    price: "260 c",
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
      <Foods foods={foods} />
      <Check />
    </div>
  );
};

export default App;
