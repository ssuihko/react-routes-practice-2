import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditProductPage(props) {
  const [productToUpdate, setProductToUpdate] = useState(null);

  const { products, setProducts } = props;
  const { id } = useParams();
  const navigate = useNavigate();

  console.log({ productToUpdate });

  /** TODO: Write code to set the `productToUpdate` state with the product data
   *  based on the ID that we get from the URL path parameter.
   *  You will need to use: `props`, `useParams`, and `useEffect` to achieve this.
   */

  useEffect(() => {
    const pr2 = products.find((x) => parseInt(x.id) == parseInt(id));
    setProductToUpdate(pr2);
  }, [id, products]);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setProductToUpdate({ ...productToUpdate, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("in submit? ");
    const newList = products.map((x) => {
      if (parseInt(x.id) === parseInt(id)) {
        console.log("changed?");
        console.log(productToUpdate);
        return productToUpdate;
      } else {
        return x;
      }
    });

    console.log("newlist?: ");
    console.log(newList);
    navigate("/products");
    setProducts([...newList]);
  }

  if (!productToUpdate) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Product Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={productToUpdate.name}
      />
      <button type="submit">Edit</button>
    </form>
  );
}

export default EditProductPage;
