import { Link } from 'react-router-dom';
import CustomButton from '../CustomButton';
import {
  Container,
  List,
  ListItem,
  ThumbnailContainer,
  Thumbnail,
  TextContainer,  
  Text
} from './index.styles.jsx';

const ShoppingCartDropdown = ({productList}) => {
  return(
    <Container>
      <List>
        {productList.map(({name, id, quantity, imageUrl, price}) => {
          return <ListItem key={id}>
            <ThumbnailContainer>
              <Thumbnail src={imageUrl} alt={name} />
            </ThumbnailContainer>
            <TextContainer>
              <Text>{name}</Text>
              <Text>{quantity} X ${price}</Text>
            </TextContainer>
          </ListItem>
        })}
      </List>
      <Link to='/checkout'>
        <CustomButton>Go to Checkout</CustomButton>
      </Link>
    </Container>
  )
}

export default ShoppingCartDropdown;