import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const Product = (props) => {
  const {_id, name, image, brand, price} = props.product;
  return (
    <Grid item xs={12} md={3}>
      <Container>
      <Card sx={{ maxWidth: 345, my:2 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            <small>{brand}</small>
          </Typography>
          <Typography variant="h5" color="text.secondary">
            ${price}
          </Typography>
        </CardContent>
        <CardActions>
        <Link to={`/products/${_id}`} style={{width: '100%', textDecoration:'none'}}>
        <Button style={{width: '100%'}} variant="contained">Buy Now</Button>
        </Link>
        </CardActions>
      </Card>
      </Container>
    </Grid>
  );
};

export default Product;
