import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const CheckOutTable = (props) => {
  const { price } = props.product;
  const { productIncreDecre } = props;
  const [cost, setCost] = React.useState(40);

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell>Product Price</TableCell>
              <TableCell>
                <b>
                  ${price} * {productIncreDecre}
                </b>
              </TableCell>
              <TableCell>
                <b>${price * productIncreDecre}</b>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colspan="2">Shipping Cost</TableCell>
              <TableCell>
                <b>$ {parseInt(40)}</b>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colspan="2">Total Cost</TableCell>
              <TableCell><strong>$ {price * productIncreDecre + cost}</strong> </TableCell>
              {console.log(productIncreDecre)}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{textAlign: 'right'}}>
        <Link to="/shipment" style={{ textDecoration: "none" }}>
        <Button sx={{mt:3}} variant="contained">Proceed To CheckOut</Button>
        </Link>
      </Box>
      
    </Box>
  );
};

export default CheckOutTable;
