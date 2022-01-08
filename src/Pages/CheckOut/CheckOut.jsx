import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckOutTable from "./CheckOutTable/CheckOutTable";
import HomeIcon from '@mui/icons-material/Home';
import { Link} from "react-router-dom";

const CheckOut = () => {
    const [product, setProduct] = useState({});
    const [productIncreDecre, setProductIncreDecre] = useState(1);

  const { id } = useParams();

  const handleProductIncrease = () => {
    const increaseProduct = productIncreDecre + 1;
    setProductIncreDecre(increaseProduct)
  }

  const handleProductDecrease = () => {
    const DecreaseProduct = productIncreDecre - 1;
    setProductIncreDecre(DecreaseProduct)
  }

  useEffect(() => {
    const url = `https://secret-lowlands-44566.herokuapp.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
        <Container>
        <Box style={{display: 'flex', justifyContent: 'space-around'}}>
        <Link to="/">
        <HomeIcon style={{fontSize: '50px'}} sx={{justifyContent: 'flex-start'}} />
        </Link>
        <Typography style={{textAlign: 'center'}} variant="h3" gutterBottom component="div">
        CheckOut
      </Typography>
        </Box>
      <div className="checkout-box">
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <img style={{width:'100%'}} src={product.image} alt="" />
          <p>{product.name}</p>
          <Box sx={{display: "flex", align: "center"}}>
          <Typography style={{textAlign: 'center'}} variant="h5" gutterBottom component="div">
          Quantity: 
      </Typography>
          <Button sx={{ml:2, mr:2}} variant="contained" onClick={handleProductDecrease}> - </Button>
          <Typography style={{textAlign: 'center'}} variant="h5" gutterBottom component="div">
          {productIncreDecre}
      </Typography>
          <Button sx={{ml:2}} variant="contained" onClick={handleProductIncrease}> + </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
        <Typography variant="h4" gutterBottom component="div">
        Details
      </Typography>
      <Typography variant="body2" gutterBottom>
        {product.details}
      </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <CheckOutTable product={product} productIncreDecre={productIncreDecre} ></CheckOutTable>
          
        </Grid>
      </Grid>
      </div>
      </Container>
    </div>
  );
};

export default CheckOut;
