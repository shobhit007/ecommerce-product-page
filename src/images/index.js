import cartIcon from "./icon-cart.svg";
import closeIcon from "./icon-close.svg";
import deleteIcon from "./icon-delete.svg";
import menuIcon from "./icon-menu.svg";
import minusIcon from "./icon-minus.svg";
import nextIcon from "./icon-next.svg";
import plusIcon from "./icon-plus.svg";
import previousIcon from "./icon-previous.svg";
import avatar from "./image-avatar.png";

const data = {
  title: "Fall Limited Edition Sneakers",
  subtitle: "Sneaker Company",
  desc: " These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 250,
  discount: 50,
  images: [
    require("./image-product-1.jpg"),
    require("./image-product-2.jpg"),
    require("./image-product-3.jpg"),
    require("./image-product-4.jpg"),
  ],
};

export {
  avatar,
  cartIcon,
  closeIcon,
  deleteIcon,
  menuIcon,
  minusIcon,
  nextIcon,
  plusIcon,
  previousIcon,
  data,
};
