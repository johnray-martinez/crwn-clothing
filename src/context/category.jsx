import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase';

export const CategoryContext = createContext({
  categories: []
});

export const CategoryProvider = ({children}) => {
  const [categories, setCategories] = useState([]);
  const value = {categories}

  // ONLY RUN ONCE PER SETUP
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, [])

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      
      setCategories(categoriesMap);
    }

    getCategoriesMap();
  }, []);

  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
}