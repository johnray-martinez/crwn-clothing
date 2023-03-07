import { Link } from 'react-router-dom';
import {
  Container,
  Background,
  TextContainer,
  Text,
  Title
} from './index.styles.jsx';

const Category = ({title, imageUrl,}) => {
  return (
    <Container>
      <Link to={`/shop/${title}`}>
        <Background src={imageUrl} alt={title}/>
        <TextContainer>
          <Title as='h2'>{title}</Title>
          <Text>Shop Now</Text>
        </TextContainer>
      </Link>
    </Container>
  );
}

export default Category;