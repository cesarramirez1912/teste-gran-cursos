import { BreadCrumbs } from "../../components/breadCrumbs";

import { RectangleTop } from "./rectangleTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircle as faCircleSelected } from "@fortawesome/free-solid-svg-icons";
import { RectangleLeft } from "./rectangleLeft";
import { RectangleRigth } from "./rectangleRigth";

import "./styles.css";

export const ElectronicsScreen = ({setMenuIsOpen,menuIsOpen}) => {
  const pages = ["eCommerce", "Electronics"];
  const ranges = [
    { description: "$10", isSelected: false },
    { description: "$10-$100", isSelected: false },
    { description: "$100-$500", isSelected: false },
    { description: "$500", isSelected: false },
    { description: "All", isSelected: true },
  ];

  const categories = [
    { description: "Cell Phones", isSelected: false, value: 1920 },
    { description: "Computers & Tablets", isSelected: false, value: 1820 },
    { description: "Cell Phone Accessories", isSelected: false, value: 462 },
    { description: "Appliances", isSelected: false, value: 6556 },
    { description: "Audio", isSelected: false, value: 120 },
    { description: "iPhone Accessories", isSelected: false, value: 353 },
    { description: "Cameras & Camcorders", isSelected: false, value: 45 },
    { description: "iPhone Cases & Clips", isSelected: false, value: 456 },
    { description: "TV & Home Theater", isSelected: false, value: 55 },
    { description: "Small Kitchen Appliances", isSelected: false, value: 10 },
  ];

  const brands = [
    { description: "Insigni", isSelected: false, value: 220 },
    { description: "Samsung", isSelected: false, value: 120 },
    { description: "Apple", isSelected: false, value: 320 },
    { description: "HP", isSelected: false, value: 32 },
    { description: "Sony", isSelected: false, value: 520 },
    { description: "Metra", isSelected: false, value: 55 },
    { description: "Dyne", isSelected: false, value: 120 },
    { description: "LG", isSelected: false, value: 98 },
    { description: "Canon", isSelected: false, value: 99 },
    { description: "Speck", isSelected: false, value: 575 },
  ];

  const products = [
    {
      productDescription: "Apple Watch Series 4 GPS",
      brand: "Apple",
      princing: 399,
      stars: "3.4",
    },
    { productDescription: "JBL Speaker", brand: "JBL", princing: 199 },
    { productDescription: "Beats Headphones", brand: "Beats", princing: 459 },
    {
      productDescription: "Apple Watch Series 4 GPS",
      brand: "Apple",
      princing: 2499,
    },
  ];

  const rating = [
    { stars: 5, all: 8500 },
    { stars: 4, all: 3250 },
    { stars: 3, all: 1120 },
  ];

  return (
    <div className="column default-style">
      <div className="header-mobile">

      </div>
      <RectangleTop setMenuIsOpen={setMenuIsOpen} menuIsOpen={menuIsOpen} />
      <BreadCrumbs pages={pages} />
      <div className="body-electronics">
        <RectangleLeft
          ranges={ranges}
          categories={categories}
          brands={brands}
          ratings={rating}
        />
        <RectangleRigth products={products} />
      </div>
    </div>
  );
};
