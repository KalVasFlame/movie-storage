import s from "./Loading.module.css";

const Loading = ({text}) => {
  return <div>
    <p className={s.loadingText}>{text}</p>
    </div>;
};

export default Loading;
