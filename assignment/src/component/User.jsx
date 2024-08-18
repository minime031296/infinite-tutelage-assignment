import { Box, Typography } from '@mui/material';
import React from 'react';
import { RiUser3Line } from "react-icons/ri";

const User = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#9b76d6',
        padding: '10px',
        borderRadius: '12px',
        ml:"30px"
      }}
    >
      {/* User Icon */}
      <Box 
        sx={{
          height: '30px',
          width: '30px',
          backgroundColor: '#a684da',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: '15px',
        }}
      >
        <RiUser3Line style={{ color: 'white', fontSize: '24px' }} />
      </Box>

      
      <Box>
        <Typography 
          sx={{ 
            fontSize: '12px', 
            fontWeight: 'bold', 
            color: 'white' 
          }}
        >
          Shyam Shakur
        </Typography>
        <Typography 
          sx={{ 
            fontSize: '12px', 
            color: 'white', 
            overflow: 'hidden', 
            textOverflow: 'ellipsis', 
            whiteSpace: 'nowrap',
            maxWidth: '200px'
          }}
        >
          shyam01.shankur@m...
        </Typography>
      </Box>
    </Box>
  );
};

export default User;
