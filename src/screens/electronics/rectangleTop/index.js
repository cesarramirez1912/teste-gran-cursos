import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faCommentAlt,
  faEnvelope,
  faCalendar,
  faStar,
  faBell,
} from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { Card } from "../../../components/card";
import { Base64ToImage, UserImage } from "../../../images/base64ToImage";
import useWindowDimensions from "../../../components/dimensions";

import "./styles.css";

export const RectangleTop = ({setMenuIsOpen,menuIsOpen}) => {
  const { width, heigth } = useWindowDimensions();
  return (
    <Card>
      <div className="row-rectangle-top">
        <div className="row-card-l-r">
          <FontAwesomeIcon
            style={{ marginRight: "22px" }}
            color="#091e42"
            icon={faCheckSquare}
          />
          <FontAwesomeIcon
            style={{ marginRight: "22px" }}
            color="#091e42"
            icon={faCommentAlt}
          />
          <FontAwesomeIcon
            style={{ marginRight: "22px" }}
            color="#091e42"
            icon={faEnvelope}
          />
          <FontAwesomeIcon
            style={{ marginRight: "22px" }}
            color="#091e42"
            icon={faCalendar}
          />
          <FontAwesomeIcon
            style={{ marginRight: "22px" }}
            color="#091e42"
            icon={faStar}
          />
        </div>
        <div className="row-card-l-r top">
          <div className="row">
            <p className="font-normal" style={{ marginRight: "28px" }}>
              English
            </p>
            <FontAwesomeIcon
              style={{ marginRight: "22px" }}
              color="#606060"
              icon={faBell}
            />
          </div>
          <div className="row">
            <FontAwesomeIcon
              style={{ marginRight: "28px" }}
              strokeWidth="1"
              color="#606060"
              icon={faSearch}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                marginRight: "9px",
              }}
            >
              <p className="font-normal" style={{color:"#091e42"}}>John Doe</p>
              <p className="font-ligth">Available</p>
            </div>
            <Base64ToImage data="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" />
            {width < 1083 && (
              <div onClick={()=>setMenuIsOpen(!menuIsOpen)} style={{ marginLeft: "10px" }}>
                <FontAwesomeIcon color="#091e42" icon={faBars} />
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
