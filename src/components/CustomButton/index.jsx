import {
  Button
} from './index.styles.jsx';

const CustomButton = ({children, buttonType, ...attributes}) => {
  return(
    <Button {...attributes} buttonType={buttonType}>
      {children}
    </Button>
  );
}

export default CustomButton;