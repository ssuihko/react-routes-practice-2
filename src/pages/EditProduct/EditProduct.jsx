import { useEffect, useState } from 'react';

function EditProductPage(props) {

  const [productToUpdate, setProductToUpdate] = useState(null);

  console.log({ productToUpdate });

  /** TODO: Write code to set the `productToUpdate` state with the product data
   *  based on the ID that we get from the URL path parameter.
   *  You will need to use: `props`, `useParams`, and `useEffect` to achieve this.
   */

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setProductToUpdate({ ...productToUpdate, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
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
