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

export const RectangleLeft = ({ ranges, categories, brands, ratings }) => {
  const { height, width } = useWindowDimensions();
  const [value, setValue] = useState(1.99);
  const [expandFilter, setExpandFilter] = useState(false);
  return (
    <div className="column">
      <div
        onClick={() => {
          if (width < 891) {
            setExpandFilter(!expandFilter);
          }
        }}
        className="row"
        style={{ justifyContent: width<891? "flex-end" : "space-between", alignItems: "flex-start" }}
      >
        {width > 891 && (
          <p
            className="font-normal"
            style={{ fontSize: "18px", marginBottom: "22px" }}
          >
            Filters
          </p>
        )}

        {width < 891 && (
          <Card margin="10px 0px" padding="10px 22px">
            <div className="row">
              <p className="font-normal" style={{ marginRight:"30px" ,fontSize: "18px" }}>
                Filters
              </p>
              <FontAwesomeIcon
                color=""
                icon={expandFilter ? faAngleUp : faAngleDown}
              />
            </div>
          </Card>
        )}
      </div>
      <div
        className={
          width < 891
            ? expandFilter
              ? "body-open-filter"
              : "body-close-filter"
            : "body-open-filter"
        }
      >
        <Card padding="25px 32px">
          <p className="font-600" style={{ marginBottom: "22px" }}>
            Multi Range
          </p>
          {ranges.map((range) => (
            <RowItems text={range.description} isSelected={range.isSelected} />
          ))}
          <Divider />
          <div className="row" style={{ justifyContent: "space-between" }}>
            <p
              className="font-600"
              style={{ marginBottom: "22px", marginTop: "33px" }}
            >
              Slider
            </p>
            <p
              className="font-600"
              style={{ marginBottom: "22px",color:"#0052cc", marginTop: "33px" }}
            >
              {parseFloat(value).toString()}-{5000}
            </p>
          </div>
          <Range
            margin="0 0 22px 0"
            onChange={(e) => setValue(e)}
            min={1.0}
            max={5000}
          />
          <Divider />
          <p
            className="font-600"
            style={{ marginBottom: "22px", marginTop: "33px" }}
          >
            Category
          </p>
          {categories.map((categori) => (
            <RowItems
              text={categori.description}
              isSelected={categori.isSelected}
              value={categori.value}
            />
          ))}{" "}
          <Divider />
          <p
            className="font-600"
            style={{ marginBottom: "22px", marginTop: "33px" }}
          >
            Brand
          </p>
          {brands.map((brand) => (
            <RowItems
              text={brand.description}
              isSelected={brand.isSelected}
              value={brand.value}
            />
          ))}
          <Divider />
          <p
            className="font-600"
            style={{ marginBottom: "22px", marginTop: "33px" }}
          >
            Rating
          </p>
          {ratings.map((rating) => (
            <div
              className="row"
              style={{ justifyContent: "space-between", marginBottom: "16px" }}
            >
              <div className="row">
                {Array.from(Array(5), (e, i) => (
                  <div style={{ marginRight: "3px" }}>
                    <FontAwesomeIcon
                      color="#ffab00"
                      icon={i < rating.stars ? faStarSelected : faStar}
                    />
                  </div>
                ))}

                <p className="font-normal">& Up</p>
              </div>
              <p className="font-normal">{rating.all}</p>
            </div>
          ))}
        </Card>
        <ButtonComponent backgroundColor="#6554C0" margin="20px 0">
          <p className="font-normal" style={{ color: "white" }}>
            CLEAR ALL FILTERS
          </p>
        </ButtonComponent>
      </div>
    </div>
  );
};

const Divider = () => (
  <div style={{ border: "1px solid #D6D6D6", white: "100%" }}></div>
);

const RowItems = ({ text, isSelected = false, value }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "18px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon
          size="sm"
          color="#091e42"
          icon={isSelected ? faCircleSelected : faCircle}
        />
        <p
          className="font-normal"
          style={{
            fontSize: "16px",
            marginLeft: "10px",
          }}
        >
          {text}
        </p>
      </div>
      {value && (
        <p
          className="font-normal"
          style={{
            fontSize: "16px",
            marginLeft: "10px",
          }}
        >
          {value}
        </p>
      )}
    </div>
  );
};
