import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RigthIcon } from "../../icons/rigth";

export const ItemMenu = ({
  text,
  icon,
  isOriginal = true,
  onClick,
  isMenuExpanded = false,
}) => {
  return (
    <div className="row-item" onClick={() => onClick && onClick()}>
      <div className="text-icon">
        {" "}
        {isOriginal ? (
          <FontAwesomeIcon color="#0052cc" icon={icon} />
        ) : (
          <div className="icon-style">{icon}</div>
        )}
        <p className="text-item">{text}</p>
      </div>
      {isMenuExpanded && <RigthIcon />}
    </div>
  );
};
