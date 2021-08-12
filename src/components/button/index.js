export const ButtonComponent = ({
  children,
  backgroundColor = "#686868",
  padding = "10px 12px",
  fontSize = "12px",
  borderRadius = "8px",
  margin,
  border="none"
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        justifyContent: "center",
        backgroundColor,
        padding,
        fontSize,
        borderRadius,
        margin,
        border,
      }}
    >
      {children}
    </div>
  );
};
