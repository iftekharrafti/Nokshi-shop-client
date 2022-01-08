import { Box, Typography, InputUnstyled } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import './shipment.css';
import {Link} from 'react-router-dom';
import useAuth from '../../hooks/useAuth.js';

const Shipment = () => {
    const {user} = useAuth();
  return (
    <div className="shipment-form">
        <Box sx={{ p: 6 }}>
      <Box sx={{ display: "flex", justifyContent: "space-evenly"}}>
          <Link to="/">
          <HomeIcon sx={{color: '#007bff', fontSize: '40px'}} />
          </Link>
      <Typography sx={{ mb: 3 }} variant="h5" gutterBottom component="div">
        Shipment
      </Typography>
      </Box>
      <Box sx={{ p: 5 }} style={{ backgroundColor: "#F8F9FA" }}>
        <form>
          <div className="input-email-password">
            <div className="input-group input-group-name">
              <label htmlFor="">Name:</label> <br />
              <input type="text" value={user.displayName} />
            </div>
            <div className="input-group input-group-email">
              <label htmlFor="">Email</label> <br />
              <input type="text"  value={user.email} />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="">Phone</label>
            <input type="text" placeholder="Your Phone Number" />
          </div>
          <div className="input-group">
            <label htmlFor="">Address</label>
            <input type="text" placeholder="Address" />
          </div>

          <div className="city-state-zip-shipment">
          <div className="input-group city-shipment">
            <label htmlFor="">City</label> <br />
            <input type="text" placeholder="City" />
          </div>
          <div className="input-group state-shipment">
            <label htmlFor="">State</label> <br />
            <input type="text" placeholder="State" />
          </div>
          <div className="input-group zip-shipment">
            <label htmlFor="">Zip</label> <br />
            <input type="text" placeholder="Zip" />
          </div>
          </div>
          <InputUnstyled variant="contained" className="input-submit" type="submit" value="Submit" />
        </form>
      </Box>
    </Box>
    </div>
  );
};

export default Shipment;
