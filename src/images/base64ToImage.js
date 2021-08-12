export const Base64ToImage = ({ data, width = "34px" }) => (
  <img
    src={`data:image/jpeg;base64,${data}`}
    style={{ width, height: width }}
  />
);
