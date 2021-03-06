export const HouseIcon = ({ height = "18px", color = "#606060" }) => {
  return (
    <svg
      width="16"
      height={height}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 6.44444L8 1L15 6.44444V15C15 15.8591 14.3036 16.5556 13.4444 16.5556H2.55556C1.69645 16.5556 1 15.8591 1 15V6.44444Z"
        stroke={color}
        strokeWidth="1"
      />
      <path
        d="M5.66663 16.5556V8.77783H10.3333V16.5556"
        stroke={color}
        strokeWidth="1"
      />
    </svg>
  );
};
