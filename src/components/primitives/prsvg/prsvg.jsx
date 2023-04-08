export const prsvg = ({ iconName }) => {
  const iconsrc = require(`../../assets/images/${iconName}.svg`);
  return (
    <img
      className={`icon ${iconName}`}
      src={iconsrc}
      alt={iconName + " icon"}
    />
  );
};
