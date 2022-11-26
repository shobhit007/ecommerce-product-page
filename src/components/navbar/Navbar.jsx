import "./navbar.css";
import { useState } from "react";
import {
  cartIcon,
  avatar,
  deleteIcon,
  menuIcon,
  closeIcon,
} from "../../images/index";

function Navbar({ cart, removeItemFromCart }) {
  const [showCart, setShowCart] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const Sidebar = () => {
    return (
      <div className="sidebar">
        <img
          src={closeIcon}
          alt=""
          className="sidebar__close-button"
          onClick={() => setSidebar((p) => !p)}
        />
        <div className="sidebar__content">
          <p className="sidebar__item">Collections</p>
          <p className="sidebar__item">Men</p>
          <p className="sidebar__item">Women</p>
          <p className="sidebar__item">About</p>
          <p className="sidebar__item">Contact</p>
        </div>
      </div>
    );
  };

  return (
    <nav className="nav flex container">
      <img
        src={menuIcon}
        alt=""
        className="menu-icon"
        onClick={() => setSidebar((p) => !p)}
      />
      {sidebar && <Sidebar />}
      <h1 className="nav__logo">sneakers</h1>
      <ul className="nav__list nav__list-links flex">
        <li className="nav__list-item">
          <a href="/" className="nav__list-link">
            Collections
          </a>
        </li>
        <li className="nav__list-item">
          <a href="/" className="nav__list-link">
            Men
          </a>
        </li>
        <li className="nav__list-item">
          <a href="/" className="nav__list-link">
            Women
          </a>
        </li>
        <li className="nav__list-item">
          <a href="/" className="nav__list-link">
            About
          </a>
        </li>
        <li className="nav__list-item">
          <a href="/" className="nav__list-link">
            Contact
          </a>
        </li>
      </ul>

      <div className="nav__list flex nav__list-icons">
        <div className="nav__list-item cart-icon__wrapper">
          <img
            src={cartIcon}
            alt="cart-icon"
            onClick={() => setShowCart((p) => !p)}
            className="cart-icon"
          />
          {cart.length > 0 && <div className="badge">{cart.length}</div>}
        </div>
        <div className="nav__list-item avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </div>

      {showCart && (
        <div className="cart">
          <h3 className="cart__heading">Cart</h3>
          <hr className="cart__hr" />
          {cart.length > 0 ? (
            <div className="cart__list">
              {cart.map((item, i) => (
                <div className="card">
                  <img src={item.images[0]} alt="" className="card__img" />
                  <div className="card__content">
                    <h4 className="card__title">{item.title}</h4>
                    <span className="card__price">
                      ${`${item.discountedPrice.toFixed(2)} x ${item.quantity}`}{" "}
                      <strong className="card__total">
                        ${(item.discountedPrice * item.quantity).toFixed(2)}
                      </strong>
                    </span>
                  </div>
                  <img
                    src={deleteIcon}
                    alt=""
                    className="card__delete"
                    onClick={() => removeItemFromCart(i)}
                  />
                </div>
              ))}
              <button className="card__btn-checkout">Checkout</button>
            </div>
          ) : (
            <div className="empty">
              <h3>Your cart is empty</h3>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
