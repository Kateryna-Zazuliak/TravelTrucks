import css from "./Button.module.css";
const Button = ({ name, type = "button", className }) => {
  return (
    <button type={type} className={`${css.base} ${css[className]}`}>
      {name}
    </button>
  );
};

export default Button;
