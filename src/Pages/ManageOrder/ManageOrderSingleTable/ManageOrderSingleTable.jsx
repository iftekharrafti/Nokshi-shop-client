import React from 'react';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

const ManageOrderSingleTable = (props) => {
    const {name, brand, price} = props.product;
    return (
        <TableRow>
              <TableCell sx={{p:2}}>{name}</TableCell>
              <TableCell sx={{p:2}}>{brand}</TableCell>
              <TableCell sx={{p:2}}>$ {price}</TableCell>
              <TableCell sx={{p:2}}>
                  <ModeEditIcon style={{marginRight: '10px'}} />
                  <DeleteIcon />
              </TableCell>
            </TableRow>
    );
};

export default ManageOrderSingleTable;