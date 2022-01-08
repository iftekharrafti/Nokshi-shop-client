import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import "./header.css";
import useAuth from "../../../hooks/useAuth";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  const { user, logOut } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: '#343A40'}}>
        <Toolbar>
          <IconButton
            style={{ flexGrow: 1, textAlign: 'left' }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, justifyContent: 'flex-start' }}
          >
            Nokshi
          </IconButton>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button style={{ color: "white" }} color="inherit">
              Home
            </Button>
          </Link>

          <Link to="/admin" style={{ textDecoration: "none" }}>
            <Button style={{ color: "white" }} color="inherit">
              Admin
            </Button>
          </Link>

          {user.email ? (
            <Box>
              <div>
                <Button
                  style={{ color: "white" }}
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    src={user.photoURL}
                    alt=""
                  />{" "}
                  <ArrowDropDownIcon />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>{user.displayName}</MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Button onClick={logOut} style={{ border: "1px solid gray" }}>LogOut</Button>
                  </MenuItem>
                </Menu>
              </div>
            </Box>
          ) : (
            <div>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button
                  sx={{ ml: 8 }}
                  style={{
                    color: "white",
                    border: "2px solid #17A2B8",
                    padding: "5px 10px",
                  }}
                  color="inherit"
                >
                  Login
                </Button>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
