import Category from '../Category';
import {
  List,
  ListContainer
} from './index.styles.jsx';

const CategoryList = () => {
  const categories = [
    {
      "id": 1,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 2,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    },
    {
      "id": 3,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 4,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 5,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    }
  ]
  return (
    <ListContainer>
      <List>
        {categories.slice(0, 2).map(({title, id, imageUrl}) => {
          return (
            <Category 
              title={title} 
              key={id} 
              imageUrl={imageUrl}
              route={`/shop/${title}`}
            />
          );
        })}
      </List>
      
      <List>
        {categories.slice(2, 5).map(({title, id, imageUrl}) => {
          return (
            <Category 
              title={title} 
              key={id} 
              imageUrl={imageUrl}
              route={`/shop/${title}`}
            />
          );
        })}
      </List> 
    </ListContainer>
  );
}

export default CategoryList;