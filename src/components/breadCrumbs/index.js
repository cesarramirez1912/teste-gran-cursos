import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { HouseIcon } from "../../icons/house";
import { RigthIcon } from "../../icons/rigth";
import "./styles.css";

export const BreadCrumbs = ({ pages }) => {
  return (
    <div className="bread-row">
      <div className="bread-left">
        <p style={{ fontSize: "24px" }}>Card Actions</p>
        <div 
        className="fade-items"
          style={{
            border: "1px solid #979797",
            height: "32px",
            margin: "0px 15px",
          }}
        />
        <div className="fade-items"><HouseIcon color="#0052cc" height="16px" /></div>
        {rigthIcons()}
        {pages &&
          pages.map((item, index) =>
            conditionalRender(item, index, pages.length)
          )}
      </div>
      <div>
        <div className="circle-bread">
          <FontAwesomeIcon color="#FFFFFF" icon={faCog} />
        </div>
      </div>
    </div>
  );
};

const conditionalRender = (item, index, length) => {
  switch (index) {
    case 0:
      return (
        <>
          <p style={{ fontSize: "14px",color:"#0052cc" }}>{item}</p>
          {rigthIcons()}
        </>
      );
    case length - 1:
      return <p style={{ fontSize: "14px",color:"#0052cc" }}>{item}</p>;
    default:
      <>
        {rigthIcons()}
        <p style={{ fontSize: "14px",color:"#0052cc" }}>{item}</p>
      </>;
  }
};

const rigthIcons = () => (
  <div style={{ margin: "0 14px" }}>
    <RigthIcon height="8px" />
    <RigthIcon height="8px" />
  </div>
);
