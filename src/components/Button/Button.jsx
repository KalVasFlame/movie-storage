import s from "./Button.module.css";

const Button = ({ text, onClick }) => {
  return (
    <div>
      <button className={s.button} onClick={onClick}>{text}</button>
    </div>
  );
};

export default Button;