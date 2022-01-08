import { Box, InputUnstyled, Typography } from "@mui/material";
import React, { useRef } from "react";
import './addNewUser.css';

const AddNewUser = () => {
    const nameRef = useRef();
    const detailsRef = useRef();
    const priceRef = useRef();
    const imageRef = useRef();
    const brandRef = useRef();

    const addNewUser = e => {
        const name = nameRef.current.value;
        const details = detailsRef.current.value;
        const price = priceRef.current.value;
        const image = imageRef.current.value;
        const brand = brandRef.current.value;

        const result = {name, details, price, image, brand};
        
        fetch(`https://secret-lowlands-44566.herokuapp.com/products`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(result)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged == true){
                alert('Added successfully')
            }
        })
        e.preventDefault();
        e.target.reset();
    }

  return (
    <div className="addNewUser">
        <Box sx={{p:6}} style={{width: '80vw'}}>
        <Typography sx={{mb:3}} variant="h5" gutterBottom component="div">
        Add New Product
      </Typography>
      <Box sx={{p:5}} style={{backgroundColor:'#F8F9FA'}}>
      <form onSubmit={addNewUser}>
          <div className="input-group">
              <label htmlFor="">Product Name:</label>
              <input type="text" ref={nameRef} placeholder="Product Name"/>
          </div>
          <div className="input-group">
              <label htmlFor="">Details:</label>
              <input type="text" ref={detailsRef} placeholder="Details"/>
          </div>
          <div className="input-group">
              <label htmlFor="">Price:</label>
              <input type="text" ref={priceRef} placeholder="Price" />
          </div>
          <div className="input-group">
              <label htmlFor="">Image:</label>
              <input type="text" ref={imageRef} placeholder="Image URL" /> 
          </div>
          <div className="input-group">
              <label htmlFor="">Brand:</label>
              <input type="text" ref={brandRef} placeholder="Brand" />
          </div>
          <InputUnstyled className="input-submit" type="submit" value="Add"  />
      </form>
      </Box>
      </Box>
    </div>
  );
};

export default AddNewUser;
