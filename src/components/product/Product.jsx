import { useState } from "react";
import "./product.css";
import {
  data,
  plusIcon,
  minusIcon,
  closeIcon,
  nextIcon,
  previousIcon,
} from "../../images/index";

function Product({ addToCart }) {
  const discountedPrice = (data.price * data.discount) / 100;
  const [imageIndex, setImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product container">
      {showModal && (
        <div className="modal">
          <div className="modal__wrapper">
            <div className="btn__close">
              <img
                src={closeIcon}
                alt="close button"
                className="btn__close-icon"
                onClick={() => setShowModal((p) => !p)}
              />
            </div>

            <img
              src={data.images[imageIndex]}
              className="product__main-image"
              alt=""
            />

            <div className="product__thumbnail-container modal__thumbnail-container flex">
              {data.images.map((image, i) => (
                <div
                  className="thumbnail__wrapper"
                  onClick={() => setImageIndex(i)}
                  key={i}
                  style={{
                    outline: imageIndex === i && "2px solid hsl(26, 100%, 55%)",
                  }}
                >
                  <img
                    src={image}
                    className="thumbnail"
                    style={{
                      opacity: imageIndex === i && 0.2,
                    }}
                    alt="thumbnail"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="product__img-container">
        <img
          src={data.images[imageIndex]}
          className="product__main-image"
          onClick={() => setShowModal((p) => !p)}
          alt=""
        />
        <div className="product__slider">
          <div
            className="slider__icon"
            onClick={() => imageIndex > 0 && setImageIndex((pre) => pre - 1)}
          >
            <img src={previousIcon} alt="" className="previous-icon" />
          </div>
          <div
            className="slider__icon"
            onClick={() =>
              imageIndex < data.images.length - 1 &&
              setImageIndex((pre) => pre + 1)
            }
          >
            <img src={nextIcon} alt="" className="next-icon" />
          </div>
        </div>
        <div className="product__thumbnail-container flex">
          {data.images.map((image, i) => (
            <div
              className="thumbnail__wrapper"
              onClick={() => setImageIndex(i)}
              key={i}
              style={{
                outline: imageIndex === i && "2px solid hsl(26, 100%, 55%)",
              }}
            >
              <img
                src={image}
                className="thumbnail"
                style={{
                  opacity: imageIndex === i && 0.2,
                }}
                alt="thumbnail"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="product__content-container">
        <div className="inner__content-container">
          <h3 className="product__subtitle">{data.subtitle}</h3>
          <h1 className="product__title">{data.title}</h1>
          <p className="product__desc">{data.desc}</p>
          <div className="product__discount-container flex">
            <h2 className="discounted__price">${discountedPrice.toFixed(2)}</h2>
            <span className="product__discount">{data.discount}%</span>
          </div>
          <span className="product__price">${data.price.toFixed(2)}</span>

          <div className="product__actions flex">
            <div className="product__quantity-container">
              <img
                src={minusIcon}
                alt=""
                className="quantity__icon"
                onClick={() => quantity > 1 && setQuantity((pre) => pre - 1)}
              />
              <span className="product__quantity">{quantity}</span>
              <img
                src={plusIcon}
                alt=""
                className="quantity__icon"
                onClick={() => setQuantity((pre) => pre + 1)}
              />
            </div>
            <button
              className="btn__add-to-cart"
              onClick={() => addToCart({ ...data, quantity, discountedPrice })}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
