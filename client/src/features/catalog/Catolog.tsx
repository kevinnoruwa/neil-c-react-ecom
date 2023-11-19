
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import React from "react";

export default function Catalog() {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    fetch("http://localhost:5000/api/Products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  

  return (
    <>
      <ProductList products={products} />
  
    </>
  );
}
