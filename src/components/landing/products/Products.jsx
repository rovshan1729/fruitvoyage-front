import React, { useEffect, useState } from 'react';
import { getCategories, getCategoriesById } from 'src/services/categories';
import ProductCategories from './ProductCategories';
import ProductsList from './product-card/ProductsList';

const Products = () => {
  const [product, setProduct] = useState([]);
  const [selectCategory, setselectCategory] = useState(1)
  const [category, setCategory] = useState([]);
  const getCategory = async () => {
    const categories = await getCategories();
    setCategory(categories);
  };
  const getProduct = async () => {
    const products = await getCategoriesById(selectCategory);
    setProduct(products.products);
  }

  useEffect(() => {
    getCategory();
    getProduct();
    console.log(selectCategory);
  }, [selectCategory]);


  return (
    <div className='mx-auto my-10 max-w-7xl px-4'>
      <h3 className='text-center text-3xl font-semibold sm:text-4xl md:text-5xl'>Our products</h3>

      <ProductCategories data={category} setSelectCategory={setselectCategory} selectCategory={selectCategory}/>
      <ProductsList data={product} />
    </div>
  );
};

export default Products;
