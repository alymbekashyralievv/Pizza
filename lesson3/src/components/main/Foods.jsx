import React from "react";
import "./Foods.css";

const Foods = (props) => {
  const { foods } = props;
  return (
    <div className="parent-food">
      <div className="foods-container">
        <div className="div-img">
          <img className="image-f" src={foods[0].image} alt="" />
        </div>

        <h2>{foods[0].name}</h2>
        <p className="composition">{foods[0].composition}</p>
        <div className="btn-div">
          <button className="btn-f1">25 см</button>
          <button className="btn-f1">30 см</button>
          <button className="btn-f1">35 см</button>
        </div>
        <div>
          <button className="btn-f2">Традиционное</button>
          <button className="btn-f2">Тонкое</button>
        </div>
        <div className="last-div">
          <h3>180 c</h3>
          <button className="last-btn">
            В корзину <span className="span">+</span>
          </button>
        </div>
      </div>

      <div className="foods-container">
        <div className="div-img">
          <img className="image-f" src={foods[1].image} alt="" />
        </div>

        <h2>{foods[1].name}</h2>
        <p className="composition">{foods[1].composition}</p>
        <div>
          <button className="btn-f">25 см</button>
          <button className="btn-f">30 см</button>
          <button className="btn-f">35 см</button>
        </div>
        <div>
          <button className="btn-f2">Традиционное</button>
          <button className="btn-f2">Тонкое</button>
        </div>
        <div className="last-div">
          <h3>180 c</h3>
          <button className="last-btn">
            В корзину <span className="span">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Foods;
