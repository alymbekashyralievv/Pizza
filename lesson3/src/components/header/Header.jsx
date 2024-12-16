import "./Header.css";
import { MdSearch } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { HiOutlineUser } from "react-icons/hi";

const Header = () => {
  return (
    <header className="container">
      <div className="logo">
        <img
          src="https://react-pizza-v2-psi.vercel.app/assets/img/logo.svg"
          alt="logo"
        />
        <div>
          <h4>React pizza</h4>
          <p>Лучшая пицца в вашем городе</p>
        </div>
      </div>
      <div className="search">
        <div>
          <span>
            <MdSearch />
          </span>
          <input type="text" placeholder="Поиск..." />
        </div>
      </div>
      <div className="buttons">
        <button style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: "15px" }}>
            <FaCartShopping />
          </span>
          <span>0$</span>&nbsp;&nbsp; | &nbsp; <span>0</span>
        </button>
        <button style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: "15px" }}>
            <HiOutlineUser />
          </span>
          Личный кабинет
        </button>
      </div>
    </header>
  );
};

export default Header;
