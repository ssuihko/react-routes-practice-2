import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ViewProductPage(props) {
  const [product, setProduct] = useState(null);
  // Get the `id` parameter from the URL path
  const { id } = useParams();
  const { products } = props;

  // Use `useEffect` so that when we navigate to a product's detailed page
  // we update our product state with the product found by the `id` parameter.
  useEffect(() => {
    // We only update the product state when we have all the necessary data
    if (products && id) {
      setProduct(products.find((product) => Number(product.id) === Number(id)));
    }
  }, [products, id]);

  console.log({ product, id });

  // When the component first renders, we won't have the product yet,
  // so we should display a useful message.
  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.name}<em> (ID: {product.id})</em></h2>
      <p>£{product.price}</p>
    </div>
  );
}

export default ViewProductPage;
