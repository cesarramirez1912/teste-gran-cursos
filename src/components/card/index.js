import "./styles.css";

export const Card = ({ children, padding = "22px", margin = "0px" }) => {
  return (
    <div className="card-style" style={{ padding, margin }}>
      {children}
    </div>
  );
};
