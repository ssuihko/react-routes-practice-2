import { useState, useEffect } from "react";
import {
  Link,
  Route,
  Routes,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import { appsData, productsData } from "./data.js";
import Home from "./pages/Home/Home";
import ProductsPage from "./pages/Products/ProductsPage";
import ViewProductPage from "./pages/ViewProduct/ViewProductPage";
import EditProductPage from "./pages/EditProduct/EditProduct.jsx";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState(productsData);
  const [app, setApp] = useState("");
  const [apps, setApps] = useState(appsData);

  //const navigate = useNavigate();
  // navigate("/"); // navigate(-1) -> go back one page

  //const location = useLocation();
  //console.log("my location: ", location);

  console.log({ products, apps });

  //const { id } = useParams();
  //console.log("id: ", id);

  // if (!products) return <div>Loading...</div>;

  /** 
  useEffect(() => {
    const prod = apps.find((p) => p.id === parseInt(id));
    console.log(prod);
    console.log("fetch id: ", id);
    setApp(prod);
  }, [id, apps]);
  **/

  return (
    <div className="App">
      <header>
        <h1>Apple Shop</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        {/*
         TODO: add your route for editing a product here. The
         Route should be /products/:id/edit and it should use
         the EditProduct element
         */}
        <Route
          path="/products/:id"
          element={<ViewProductPage products={products} />}
        />
        <Route
          path="/products/:id/edit"
          element={
            <EditProductPage products={products} setProducts={setProducts} />
          }
        />
        <Route
          path="/products"
          element={<ProductsPage products={products} />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
