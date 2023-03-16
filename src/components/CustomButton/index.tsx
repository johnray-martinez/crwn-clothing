import Spinner from '../Spinner';
import {
  Button
} from './index.styles.jsx';

type CustomButtonProps  = {
  children: string,
  isLoading?: boolean, 
  buttonType?: string,
  [attributes: string]: any
}

const CustomButton = ({
  children, 
  isLoading = false, 
  buttonType = '', 
  ...attributes
}: CustomButtonProps) => {
  return(
    <Button disabled={isLoading} {...attributes} buttonType={buttonType}>
      {isLoading 
        ? <Spinner hasOverlay={false} height={12} width={12} />
        : children
      }
    </Button>
  );
}

export default CustomButton;