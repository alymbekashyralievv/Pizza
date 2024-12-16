import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Component1 from "./props-ls2/Component1.jsx";
import Modal from "./props-ls2/modal/modal.jsx";
import Practice from "./props-homework/Practice.jsx";

const Footer = () => {
  return <footer></footer>;
};

// const Primarybutton = () => {
//   return <button className="blue">Primary</button>;
// };

// const Secondarybutton = () => {
//   return <button className="gray">Secondary</button>;
// };

// const Successbutton = () => {
//   return <button className="green">Success</button>;
// };

// const Dangerbutton = () => {
//   return <button className="red">Danger</button>;
// };

// const Warningbutton = () => {
//   return <button className="yellow">Warning</button>;
// };

// const Infobutton = () => {
//   return <button className="light-blue">Info</button>;
// };

// const Darkbutton = () => {
//   return <button className="dark">Dark</button>;
// };

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <div style={{ display: "flex", gap: "100px", textAlign: "center" }}>
      <Component1
        text="Pizza черепашки ниндзя"
        price={890}
        imgUrl={
          "https://media.dodostatic.net/image/r:233x233/019342AED63577C6A52E16D13B12892E.avif"
        }
      />

      <Component1
        text="Мясная аджика"
        price={760}
        imgUrl={
          "https://media.dodostatic.net/image/r:233x233/11EF6612D8805B8FA33D45115AFF17C7.avif"
        }
      />

      <Component1
        text="Баварская"
        price={600}
        imgUrl={
          "https://media.dodostatic.net/image/r:233x233/019342AED63577C6A52E16D13B12892E.avif"
        }
      />

      <Component1
        text="Чикен бомбони"
        price={490}
        imgUrl={
          "https://media.dodostatic.net/image/r:233x233/019342AED63577C6A52E16D13B12892E.avif"
        }
      />
    </div>
    <Practice
      imgURL={
        "https://img5.lalafo.com/i/posters/original_webp/5b/7f/64/avto-svezeprignan-iz-korei-rastamozen-ne-oformlen-torg-u-kapota-id-62297825-809825897.webp"
      }
      p="Продаю автомобиль"
      h2="Kia Stonic: 2018 г., 1.4 л, Автомат, Бензин, Кроссовер"
      h3={"1 111 037"}
      btn="Позвонить"
    />

    <Practice
      imgURL={
        "https://img5.lalafo.com/i/posters/original_webp/f5/ab/61/5e3bb3df5668a09db91683ec5d.webp"
      }
      p="Продаю автомобиль"
      h2="Toyota RAV4: 2017 г., 2.5 л, Автомат, Гибрид, Кроссовер"
      h3={"2 126 595 KGS"}
      btn="Позвонить"
    />

    <Practice
      imgURL={
        "https://img5.lalafo.com/i/posters/original_webp/55/b9/8d/bajlanys-ucun-usul-nomurga-calynyzdar-996-700-963-155-id-43733842-814704334.webp"
      }
      p="Продаю автомобиль"
      h2="Mercedes-Benz : 2002 г., 2 л, Автомат, Бензин, Седан"
      h3="Договорная"
      btn="Позвонить"
    />

    <Modal />
  </StrictMode>
);
