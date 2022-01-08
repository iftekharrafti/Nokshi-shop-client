import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import AddIcon from "@mui/icons-material/Add";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import AddNewUser from "./Dashboard/AddNewUser/AddNewUser";
import ManageOrder from "../ManageOrder/ManageOrder";
import EditOrder from "../EditOrder/EditOrder";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import HomeIcon from '@mui/icons-material/Home';
import PersonalInfo from "./Dashboard/PersonalInfo/PersonalInfo";
import './admin.css';

const drawerWidth = 240;

const Admin = (props) => {
  const { window } = props;
  let { path, url } = useRouteMatch();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{backgroundColor: '#343A40', height: '100vh'}}>
      <Link to="/" style={{ color: "white" }}>
        <Box sx={{ display: "flex", justifyContent:'center', py: 1}}>
        <HomeIcon style={{ fontSize: '50px' }} />
        </Box>
      </Link>
      <Divider />

      <List>
        <ListItem>
          <Link style={{textDecoration:'none', color: "white"}} to={`${url}/manage`}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ProductionQuantityLimitsIcon sx={{mr:1, fontSize: '25px'}} /> Manage Product
            </Box>
          </Link>
        </ListItem>
        <ListItem>
          <Link style={{textDecoration:'none', color: "white"}} to={`${url}/add`}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AddIcon  sx={{mr:1, fontSize: '25px'}}  /> Add Product
            </Box>
          </Link>
        </ListItem>
        <ListItem>
          <Link style={{textDecoration:'none', color: "white"}} to={`${url}/edit`}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ModeEditIcon  sx={{mr:1, fontSize: '25px'}}  /> Edit Product
            </Box>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: { md: "none", sm: "none" },
          height: '50px'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box>
        <Toolbar />
        <Switch>
          <Route exact path={`${path}`}>
            <PersonalInfo></PersonalInfo>
          </Route>
          <Route exact path={`${path}/manage`}>
            <ManageOrder></ManageOrder>
          </Route>
          <Route path={`${path}/add`}>
            <AddNewUser></AddNewUser>
          </Route>
          <Route path={`${path}/edit`}>
            <EditOrder></EditOrder>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
};

export default Admin;
