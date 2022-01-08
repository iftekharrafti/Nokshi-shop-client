import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import ManageOrderSingleTable from "./ManageOrderSingleTable/ManageOrderSingleTable";

const ManageOrder = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch("https://secret-lowlands-44566.herokuapp.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Box sx={{p:4}}>
      <Typography variant="h3" gutterBottom component="div">
        Manage Product:
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 950 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><b>Product name</b></TableCell>
              <TableCell><b>Brand</b></TableCell>
              <TableCell><b>Price</b></TableCell>
              <TableCell><b>Action</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              products.map(product => <ManageOrderSingleTable product={product} />)
            }
            
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ManageOrder;
