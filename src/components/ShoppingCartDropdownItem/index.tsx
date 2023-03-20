import React, { memo } from 'react';
import {
  Container, 
  Thumbnail,
  ThumbnailContainer,
  TextContainer,
  Text,
} from './index.styles';

type ShoppingCartDropdownItemProps = {
  id: number, 
  imageUrl: string, 
  name: string, 
  quantity: number, 
  price: number
}

const ShoppingCartDropdownItem = memo(({
  id, 
  imageUrl, 
  name, 
  quantity, 
  price,
}: ShoppingCartDropdownItemProps) => {
  return (
    <Container key={id}>
      <ThumbnailContainer>
        <Thumbnail src={imageUrl} alt={name} />
      </ThumbnailContainer>
      <TextContainer>
        <Text>{name}</Text>
        <Text>{quantity} X ${price}</Text>
      </TextContainer>
    </Container>
  )
})

export default ShoppingCartDropdownItem