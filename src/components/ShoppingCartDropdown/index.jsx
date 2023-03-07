import { Link } from 'react-router-dom';

import {
  Container,
  List,
  ListItem,
  ThumbnailContainer,
  Thumbnail,
  TextContainer,  
  Text,
  CheckoutButton,
  EmptyMessage
} from './index.styles.jsx';

const ShoppingCartDropdown = ({productList}) => {
  return(
    <Container>
      <List>
        {productList.length ? 
          productList.map((product, i) => {
          const {name, quantity, imageUrl, price} = product;

          return <ListItem key={i}>
            <ThumbnailContainer>
              <Thumbnail src={imageUrl} alt={name} />
            </ThumbnailContainer>
            <TextContainer>
              <Text>{name}</Text>
              <Text>{quantity} X ${price}</Text>
            </TextContainer>
          </ListItem>
        })
        : <EmptyMessage>Your cart is empty</EmptyMessage>}
      </List>
      <Link to='/checkout'>
        <CheckoutButton>Go to Checkout</CheckoutButton>
      </Link>
    </Container>
  )
}

export default ShoppingCartDropdown;