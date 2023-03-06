import './index.styles.scss';

const CustomButton = ({children, buttonType, ...attributes}) => {
  const baseClass = 'custom-button';
  const BUTTON_TYPE_CLASSES = {
    google: `${baseClass}--google`,
    inverted: `${baseClass}--inverted`,
  }
  console.log(buttonType);
  return(
    <button {...attributes} className={`custom-button ${BUTTON_TYPE_CLASSES[buttonType]}`}>
      {children}
    </button>
  );
}

export default CustomButton;