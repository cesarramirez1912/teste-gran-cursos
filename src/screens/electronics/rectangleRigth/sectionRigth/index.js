import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { CartIcon } from "../../../../icons/cart";
import { ButtonComponent } from "../../../../components/button";
import { HeartIcon } from "../../../../icons/heart";
import { ShoppingBagIcon } from "../../../../icons/shoppingBag";
import useWindowDimensions from "../../../../components/dimensions";

export const SectionRigth = ({ stars, princing }) => {
  const { height, width } = useWindowDimensions();
  return (
    <div
      className="column"
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "15px",
        paddingLeft: "15px",
        paddingTop: width < 571 ? "15px" :"0px",
        marginTop:width <571 ? "15px":"0px",
        borderTop:width <571 ? "1px solid #DADADA":"none",
        borderLeft: width < 571 ? "none" : "1px solid #DADADA",
      }}
    >
      {stars && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <ButtonComponent backgroundColor="#FFAB00"  margin="0 0 8px 0">
            <div className="row">
              <p
                className="font-normal"
                style={{ color: "white", marginRight: "3px" }}
              >
                {stars}
              </p>
              <FontAwesomeIcon color="white" icon={faStar} />
            </div>
          </ButtonComponent>
        </div>
      )}

      <p className="font-normal" style={{ fontSize: "18px" }}>
        ${princing}
      </p>
      <div style={{ marginTop: "5px", display: "flex", width: "130px" }}>
        <CartIcon />
        <p
          className="font-normal"
          style={{ marginLeft: "4px", color: "#999999" }}
        >
          Free Shipping
        </p>
      </div>

      <ButtonComponent   margin="10px 0px" backgroundColor="#FFFFFF">
        <div className="row">
          <HeartIcon color="#FF000A" />
          <p className="font-normal" style={{ color:"#FF000A", marginLeft: "4px" }}>
            WISHLIST
          </p>
        </div>
      </ButtonComponent>

      <ButtonComponent backgroundColor="#0052cc" margin="0px" >
        <div className="row">
          <ShoppingBagIcon />
          <p
            className="font-normal font-12px"
            style={{
              marginLeft: "4px",
              color: "white",
            }}
          >
            ADD TO CART
          </p>
        </div>
      </ButtonComponent>
    </div>
  );
};
