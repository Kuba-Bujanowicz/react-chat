import { InputHTMLAttributes } from "react";
import { ReactSVG } from "react-svg";
import Spinner from "../spinner/Spinner";
import validIcon from "../../assets/icons/valid.svg";
import invalidIcon from "../../assets/icons/invalid.svg";

type Props = {
  inputName: string;
  displayType?: "error" | "success" | "loading";
  error?: string;
  icon?: string;
};

const Input: React.FC<InputHTMLAttributes<HTMLInputElement> & Props> = ({
  inputName,
  displayType,
  error,
  icon,
  ...rest
}) => {
  const getIcon = () => {
    switch (displayType) {
      case "error":
        return <ReactSVG src={invalidIcon} />;
      case "success":
        return <ReactSVG src={validIcon} />;
      case "loading":
        return <Spinner />;
      default:
        return icon ? <ReactSVG src={icon} /> : null;
    }
  };

  return (
    <div className={`input ${error ? "input--error" : ""}`}>
      <div className="input__ctn">
        <input className="input__field" required {...rest} />
        <label className="input__label">{inputName}</label>
        <div className="input__icon">{getIcon()}</div>
      </div>
      <p className="input__error">{error}</p>
    </div>
  );
};

export default Input;
