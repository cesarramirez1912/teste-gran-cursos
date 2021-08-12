export const SectionMiddle = ({ product, brand, description }) => {
  return (
    <div className="column" style={{ marginLeft: "10px" }}>
      <p className="font-normal" style={{ fontSize: "16px" }}>
        {product}
      </p>
      <div className="row" style={{ marginTop: "7px" }}>
        <p
          className="font-normal font-normal-color font-12px"
          style={{
            marginRight: "4px",
          }}
        >
          By
        </p>
        <p className="font-12px font-600 font-normal-color ">{brand}</p>
      </div>
      <p className="font-normal" style={{ marginTop: "22px" }}>
        {description}
      </p>
    </div>
  );
};
