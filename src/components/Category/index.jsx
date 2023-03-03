import './index.styles.scss';

const Category = ({title, imageUrl,}) => {
  return (
    <div className='category'>
      <img src={imageUrl} alt={title}/>
      <p>{title}</p>
    </div>
  );
}

export default Category;