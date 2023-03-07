import { useNavigate } from 'react-router-dom';
import {
  Container,
  Background,
  TextContainer,
  Text,
  Title
} from './index.styles.jsx';
const Category = ({title, imageUrl, route}) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  
  return (
    <Container onClick={onNavigateHandler}>
      <Background src={imageUrl} alt={title}/>
      <TextContainer>
        <Title as='h2'>{title}</Title>
        <Text>Shop Now</Text>
      </TextContainer>
    </Container>
  );
}

export default Category;