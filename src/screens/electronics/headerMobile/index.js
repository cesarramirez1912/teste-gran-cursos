import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faStar,
  faPlusSquare,
  faMinusSquare,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCircle as faCircleSelected,
  faStar as faStarSelected,
  faAngleDown,
  faAngleUp
} from "@fortawesome/free-solid-svg-icons";
import { Card } from "../../../components/card";
import { ButtonComponent } from "../../../components/button";
import { Range } from "../../../components/range";
import "./styles.css";
import useWindowDimensions from "../../../components/dimensions";
import {Logo} from "../../../icons/logo"

export const RectangleLeft = ({ ranges, categories, brands, ratings }) => {
  const { height, width } = useWindowDimensions();
  const [value, setValue] = useState(1.99);
  const [expandFilter, setExpandFilter] = useState(false);
  return (
    <div className="row">
     <Logo/>
    </div>
  );
};
