import "./styles.css";
export const Range = ({ min, max, onChange, margin }) => {
  return (
    <div style={{ margin }}>
      <input
        type="range"
        min={min}
        onChange={(e) => onChange(e.target.value)}
        max={max}
        className="slider"
      />
    </div>
  );
};
