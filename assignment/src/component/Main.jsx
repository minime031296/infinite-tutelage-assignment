import { Box, Typography } from '@mui/material';
import React from 'react';
import { GoArrowDownLeft } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import { RiSettings4Line } from "react-icons/ri";
import { GrUserExpert } from "react-icons/gr";
import { RiStarSLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { GoArrowSwitch } from "react-icons/go";

import { GoHistory } from "react-icons/go";
import { RiUser2Line } from "react-icons/ri";
import vector from '../assets/vector.svg';
import analytics from '../assets/analytics.svg';

const Main = () => {
  return (
    <Box 
      sx={{
        height: "500px", 
        width: "81%", 
        border: "", 
        ml: "18%", 
        mt: "6%", 
        display: "grid", 
        gridTemplateColumns: "2fr 1fr",  
        gridTemplateRows: "1fr 2fr",     
        gap: "5px",
        
        backgroundColor:"white"
    }}
    >
      
      
      <Box 
        sx={{ 
          border: "", 
          backgroundColor: "white", 
          gridColumn: "1 / 2", 
          gridRow: "1 / 2",
          borderRadius: "10px",
          height:"190px",
          boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          padding: "20px",
          

        }}
      >
        <Typography sx={{fontSize:"12px", fontWeight:"bold"}}>
                Quick Links
        </Typography>

        <Box 
        sx={{border: "", height:"110px", width:"100%", mt:"12px", display:"flex", flexDirection:"column", gap:"10px"}}>
            <Box 
             sx={{border: "", height:"50%", width:"100%",display:"flex", flexDirection:"row", gap:"10px"}}
            >
                <Box sx={{border: "", height:"100%", width:"15%", borderRadius:"10px", display:"flex", flexDirection:"column", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px", backgroundColor:"#fcfcfc"}}>
                    <Box
                        sx={{border: "", height:"100px", width:"100%",  display: "flex", justifyContent: "center", alignItems: "center",}}
                    >
                        <GoArrowDownLeft />
                    </Box>
                    <Box
                        sx={{border: "", height:"100px", width:"100%",  display: "flex", justifyContent: "center", alignItems: "center",}}
                    >
                        <span style={{fontSize:"12px"}}>Deposit</span>
                    </Box>
                </Box>
                
                <Box sx={{border: "", height:"100%", width:"15%", borderRadius:"10px", display:"flex", flexDirection:"column", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px", backgroundColor:"#fcfcfc"}}>
                    <Box
                        sx={{border: "", height:"100px", width:"100%",  display: "flex", justifyContent: "center", alignItems: "center",}}
                    >
                        <GoArrowUpRight />
                    </Box>
                    <Box
                        sx={{border: "", height:"100px", width:"100%",  display: "flex", justifyContent: "center", alignItems: "center",}}
                    >
                        <span style={{fontSize:"12px"}}>Withdraw</span>
                    </Box>
                </Box>

                <Box sx={{border: "", height:"100%", width:"15%", borderRadius:"10px", display:"flex", flexDirection:"column", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px", backgroundColor:"#fcfcfc"}}>
                    <Box
                        sx={{border: "", height:"100px", width:"100%",  display: "flex", justifyContent: "center", alignItems: "center",}}
                    >
                        <RiSettings4Line />
                    </Box>
                    <Box
                        sx={{border: "", height:"100px", width:"100%",  display: "flex", justifyContent: "center", alignItems: "center",}}
                    >
                        <span style={{fontSize:"12px"}}>Settings</span>
                    </Box>
                </Box>

                <Box sx={{border: "", height:"100%", width:"15%", borderRadius:"10px", display:"flex", flexDirection:"column", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px", backgroundColor:"#fcfcfc"}}>
                    <Box
                        sx={{border: "", height:"100px", width:"100%",  display: "flex", justifyContent: "center", alignItems: "center",}}
                    >
                        <GrUserExpert />
                    </Box>
                    <Box
                        sx={{border: "", height:"100px", width:"100%",  display: "flex", justifyContent: "center", alignItems: "center",}}
                    >
                        <span style={{fontSize:"12px",}}>Verification</span>
                    </Box>
                </Box>

                <Box sx={{border: "", height:"100%", width:"15%", borderRadius:"10px", display:"flex", flexDirection:"column", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px", backgroundColor:"#fcfcfc"}}>
                    <Box
                        sx={{border: "", height:"100px", width:"100%",  display: "flex", justifyContent: "center", alignItems: "center",}}
                    >
                        <RiStarSLine  />
                    </Box>
                    <Box
                        sx={{border: "", height:"100px", width:"100%",  display: "flex", justifyContent: "center", alignItems: "center",}}
                    >
                        <span style={{fontSize:"12px",}}>Bonuses</span>
                    </Box>
                </Box>

                <Box sx={{border: "", height:"100%", width:"15%", borderRadius:"10px", display:"flex", flexDirection:"column", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px", backgroundColor:"#fcfcfc"}}>
                    <Box
                        sx={{border: "", height:"100px", width:"100%",  display: "flex", justifyContent: "center", alignItems: "center",}}
                    >
                        <GoGraph />
                    </Box>
                    <Box
                        sx={{border: "", height:"100px", width:"100%",  display: "flex", justifyContent: "center", alignItems: "center",}}
                    >
                        <span style={{fontSize:"12px", }}>MT5</span>
                    </Box>
                </Box>

                <Box sx={{border: "", height:"100%", width:"15%", borderRadius:"10px", display:"flex", flexDirection:"column", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px", backgroundColor:"#fcfcfc"}}>
                    <Box
                        sx={{border: "", height:"100px", width:"100%",  display: "flex", justifyContent: "center", alignItems: "center",}}
                    >
                        <GoArrowSwitch />
                    </Box>
                    <Box
                        sx={{border: "", height:"100px", width:"100%",  display: "flex", justifyContent: "center", alignItems: "center",}}
                    >
                        <span style={{fontSize:"12px",}}>Transfer</span>
                    </Box>
                </Box>
                
            </Box>
            <Box
            sx={{border: "", height:"50%", width:"100%",display:"flex", flexDirection:"row", gap:"10px"}}>
                <Box sx={{border: "", height:"100%", width:"13%", borderRadius:"10px", display:"flex", flexDirection:"column", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px", backgroundColor:"#fcfcfc"}}>
                    <Box
                        sx={{border: "", height:"100px", width:"100%",  display: "flex", justifyContent: "center", alignItems: "center",}}
                    >
                        < GoHistory />
                    </Box>
                    <Box
                        sx={{border: "", height:"100px", width:"100%",  display: "flex", justifyContent: "center", alignItems: "center",}}
                    >
                        <span style={{fontSize:"12px",}}>History</span>
                    </Box>
                </Box>

                <Box sx={{border: "", height:"100%", width:"13%", borderRadius:"10px", display:"flex", flexDirection:"column", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px", backgroundColor:"#fcfcfc"}}>
                    <Box
                        sx={{border: "", height:"100px", width:"100%",  display: "flex", justifyContent: "center", alignItems: "center",}}
                    >
                        < RiUser2Line  />
                    </Box>
                    <Box
                        sx={{border: "", height:"100px", width:"100%",  display: "flex", justifyContent: "center", alignItems: "center",}}
                    >
                        <span style={{fontSize:"12px",}}>Partner</span>
                    </Box>
                </Box>

                <Box sx={{border: "", height:"100%", width:"13%", borderRadius:"10px", display:"flex", flexDirection:"column", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px", backgroundColor:"#fcfcfc"}}>
                    <Box
                        sx={{border: "", height:"100px", width:"100%",  display: "flex", justifyContent: "center", alignItems: "center",}}
                    >
                        <img src={vector} alt="" />
                    </Box>
                    <Box
                        sx={{border: "", height:"100px", width:"100%",  display: "flex", justifyContent: "center", alignItems: "center",}}
                    >
                        <span style={{fontSize:"12px",}}>Exchange</span>
                    </Box>
                </Box>

                <Box sx={{border: "", height:"100%", width:"13%", borderRadius:"10px", display:"flex", flexDirection:"column", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px", backgroundColor:"#fcfcfc"}}>
                    <Box
                        sx={{border: "", height:"100px", width:"100%",  display: "flex", justifyContent: "center", alignItems: "center",}}
                    >
                         <img src={analytics} alt="" />
                    </Box>
                    <Box
                        sx={{border: "", height:"100px", width:"100%",  display: "flex", justifyContent: "center", alignItems: "center",}}
                    >
                        <span style={{fontSize:"12px",}}>Analytics</span>
                    </Box>
                </Box>
            </Box>
        </Box>
      </Box>

      {/* Upper-right box (Trading Accounts section) */}
      <Box 
        sx={{ 
          border: "1px solid black", 
          backgroundColor: "lightgray", 
          width:"20px",
         
          borderRadius: "10px",
          height:"200px",
          padding: "20px"
        }}
      >
        {/* Add content like account details here */}b
      </Box>

      {/* Lower-left box (Overview section) */}
      <Box 
        sx={{ 
          border: "1px solid black", 
          backgroundColor: "lightgray", 
          gridColumn: "1 / 2", 
          gridRow: "2 / 3",
          
          height: "300px", 
          borderRadius: "10px",
          padding: "20px"
        }}
      >cccc
        {/* Add chart or other visual content here */}
      </Box>

      {/* Lower-right box (Open Trades section) */}
      <Box 
        sx={{ 
          border: "1px solid black", 
          backgroundColor: "lightgray", 
          gridColumn: "2 / 3", 
          gridRow: "3 / 3",
          height: "100%", 
          borderRadius: "10px",
          padding: "20px"
        }}
      >
        ddddddddddddd
      </Box>
    </Box>
  )
}

export default Main;
