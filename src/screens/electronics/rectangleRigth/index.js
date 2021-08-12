import { useState } from "react";
import { Card } from "../../../components/card";
import { Base64ToImage } from "../../../images/base64ToImage";
import { defaultImageData } from "../../../datas/base64ProductImage";
import { SectionMiddle } from "./sectionMiddle";
import { SectionRigth } from "./sectionRigth";
import { Pagination } from "../../../components/pagination";
import { GridIcon } from "../../../icons/grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useWindowDimensions from "../../../components/dimensions";
import "./styles.css";

export const RectangleRigth = ({ products }) => {
  const { height, width } = useWindowDimensions();
  const [selected, setSelected] = useState(1);
  function changePage(index) {
    setSelected(index);
  }

  return (
    <div className="column body-rectangle-rigth">
      <div
        className="row"
        style={{
          justifyContent: "space-between",
          flexDirection: width < 517 ? "column-reverse" : "row",
          alignItems: width < 517 ? "flex-end" : "center",
        }}
      >
        <p
          className="font-normal"
          style={{ fontSize: "18px", marginTop: width < 517 ? "15px" : "0px" }}
        >
          7,618 results found in 5ms
        </p>
        <div className="row">
          <Card padding="10px">
            <div className="row">
              <select
                className="select-style"
                style={{ backgroundColor: "white" }}
              >
                <option style={{ backgroundColor: "white" }} value="fa-home">
                  Default
                </option>
                <option
                  style={{ backgroundColor: "white" }}
                  value="fa-genderless"
                >
                  eCommerce
                </option>
              </select>
            </div>
          </Card>
          <Card margin="0 10px" padding="10px">
            <GridIcon />
          </Card>
          <Card padding="10px">
            <FontAwesomeIcon color="#606060" icon={faBars} />
          </Card>
        </div>
      </div>
      <Card padding="25px 32px" margin="10px 0 22px 0">
        <input
          placeholder="Search hear"
          style={{
            color: "#999999",
            fontSize: "22px",
            fontFamily: "Montserrat",
            border: "none",
            outline: "none",
          }}
        />
      </Card>
      {products.map((product) => (
        <Card padding="20px" margin="0px 0px 22px 0px">
          <div className={width < 517 ? "column" : "row"}>
            <div className="image-product">
              <Base64ToImage width="153px" data={defaultImageData} />
            </div>

            <SectionMiddle
              product={product.productDescription}
              brand={product.brand}
              description={descriptionDefault}
            />
            <SectionRigth princing={product.princing} stars={product.stars} />
          </div>
        </Card>
      ))}
      <Pagination
        changePage={changePage}
        selected={selected}
        data={paginationData}
      />
    </div>
  );
};

const paginationData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const descriptionDefault = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.`;
