import { Box, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../../hooks/useAuth';

const PersonalInfo = () => {
    const {user} = useAuth();
    return (
        <Box sx={{ width:'80vw', display: "flex", justifyContent:'center', p:4, backgroundColor: '#28A745', height:'100vh'}}>
            <Box sx={{display: "flex", flexDirection:'column', alignItems: 'center'}}>
                <img style={{width:'100px', height: '100px', borderRadius: '50%'}} src={user.photoURL} alt="" />
                <Typography sx={{pt:2}} variant="h5" noWrap component="div">
            Admin : {user.displayName}
          </Typography>
            </Box>
        </Box>
    );
};

export default PersonalInfo;