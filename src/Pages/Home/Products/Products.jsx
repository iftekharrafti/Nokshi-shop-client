import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import Grid from "@mui/material/Grid";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://secret-lowlands-44566.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
        
        {products.map((product) => (
          <Product
            product={product}
           ></Product>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
