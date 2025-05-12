import { useNavigate } from 'react-router';
import Container from '../components/Container.tsx';
import { useEffect, useState } from 'react';
import { useProductStore, type ProductType } from '../store/productStore.ts';
import Wrapper from '../components/Wrapper.tsx';

const Product = () => {
  const [loading, setLoading] = useState(false);
  const products = useProductStore((state) => state.products);
  const setProducts = useProductStore((state) => state.setProducts);
  const nav = useNavigate();

  const fetchProducts = async () => {
    setLoading(true);
    try {
      await fetch('https://fakestoreapi.com/products?limit=20')
        .then((response) => response.json())
        .then((response) => setProducts(response));
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log('Products array:', products);
  console.log('Products length:', products?.length);
  products?.forEach((product) => {
    console.log('Product ID:', product.id, 'Title:', product.title);
  });

  return (
    <view>
      {loading ? (
        <view className="flex items-center justify-center h-screen">
          <text className="text-3xl font-semibold">Loading...</text>
        </view>
      ) : (
        <Container>
          <view className="p-4">
            <text className="title">Product</text>
            <list
              list-type="waterfall" // need to add this to make it render
              column-count={1}
              scroll-orientation="vertical"
              className="list"
              custom-list-name="list-container"
            >
              {products?.map((product: ProductType, index) => {
                console.log('Product CCCC:', product);
                return (
                  <list-item key={'s' + index} item-key={'' + index}>
                    <view className="pb-4">
                      <text className="itemText">{product.title}</text>
                      <text className="price">
                        {product.price ? `$${product.price}` : ''}
                      </text>
                    </view>
                  </list-item>
                );
              })}
            </list>
            <text bindtap={() => nav(-1)} className="text-xl font-semibold">
              Back
            </text>
          </view>
        </Container>
      )}
    </view>
  );
};

export default Product;
