import { RigthIcon } from "../../icons/rigth";
import useWindowDimensions from "../dimensions";
import "./styles.css";
export const Pagination = ({ data, changePage, selected }) => {
  const { height, width } = useWindowDimensions();
  let auxData = [];
  if(width<977){
    auxData = data.slice(selected-1,selected+3);
  }else{
    auxData = data;
  }
  
  return (
    <div
      className="row"
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <div
        style={{ marginRight: "20px" }}
        className="pagination-button"
        onClick={() => {
          if(selected!==1){
            changePage(selected - 1)
          }
        }}
      >
        <div style={{ transform: "rotate(-180deg)" }}>
          {" "}
          <RigthIcon height="12px" color="#000000" />
        </div>
      </div>
      <div className="pagination-principal">
        {auxData.map((number) => (
          <div
            onClick={() => changePage(number)}
            className={
              number === selected
                ? "pagination-button pagination-selected"
                : "pagination-button"
            }
          >
            {number}
          </div>
        ))}
      </div>
      <div
        className="pagination-button"
        style={{ marginLeft: "20px" }}
        onClick={() => {
          if(selected!==data.length){
            changePage(selected + 1)
          }
         }}
      >
        <RigthIcon height="12px" color="#000000" />
      </div>
    </div>
  );
};
