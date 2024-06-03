import Toggle from "./Toggle";

const Header = ({ id }) => {
  return (
    <div className="quiz-header">
      <div>
        <img src={`/images/icon-${id}.svg`} alt={id} className={`${id}-bg`} />
        <p>{id}</p>
      </div>
      <Toggle />
    </div>
  );
};

export default Header;
