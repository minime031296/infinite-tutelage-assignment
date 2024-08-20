import { Box, Typography } from '@mui/material';
import React from 'react';
import { GoArrowDownLeft } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import { RiSettings4Line } from "react-icons/ri";
import { GrUserExpert } from "react-icons/gr";
import { RiStarSLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { GoArrowSwitch } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { RiUser2Line } from "react-icons/ri";
import vector from '../assets/vector.svg';
import analytics from '../assets/analytics.svg';
import Graph from './Graph';

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
        backgroundColor:"white",
    }}
    >
      
    <Box 
        sx={{ 
          border: "", 
          backgroundColor: "white", 
          gridColumn: "1 / 2", 
          gridRow: "1 / 2",
          borderRadius: "10px",
          height:"170px",
          boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          padding: "10px",
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

{/* Upper-right box */}
<Box 
  sx={{ 
    border: "", 
    backgroundColor: "white", 
    ml: { xs: "10px", md: "20px" }, 
    mr: { xs: "10px", md: "20px" },
    height: { xs: "auto", md: "230px" }, 
    borderRadius: "10px",
    padding: { xs: "10px", md: "20px" }, 
    display:"flex",
    flexDirection:"column",
    gap:"5px", 
    boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
  }}
>
  <Typography sx={{ fontSize: { xs: "10px", md: "12px" }, fontWeight: "bold", mt: { xs: "0px", md: "-10px" } }}>
    Trading Accounts
  </Typography>

 {/* second box */}
  <Box 
    sx={{ 
      border: "", 
      backgroundColor: "#fcfcfc", 
      ml: { xs: "10px", md: "20px" }, 
      mr: { xs: "10px", md: "20px" }, 
      height: "90px", 
      borderRadius: "10px",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
    }}
  >
    <Box sx={{ 
      border: "", 
      backgroundColor: "", 
      mr: { xs: "30px", md: "70px" }, 
      height: "20px", 
      display: "flex", 
      flexDirection: "column" 
    }}>
      <Typography sx={{ fontSize: { xs: "10px", md: "12px" }, fontWeight: "bold" }}>
        Master Account
      </Typography>   
    </Box>

    <Box sx={{ 
      border: "", 
      backgroundColor: "", 
      mt: "5px", 
      mr: { xs: "30px", md: "70px" }, 
      height: "20px", 
      display: "flex", 
      flexDirection: "row", 
      justifyContent: "space-evenly" 
    }}>
      <Box sx={{ border: "", fontSize: { xs: "10px", md: "12px" }, textAlign: "center", height: "100%", width: "40%", borderRadius: "10px", backgroundColor: "#f3f4f8", color: "#545b68" }}>
        CTrader
      </Box>
      <Box sx={{ border: "", fontSize: { xs: "10px", md: "12px" }, textAlign: "center", color: "#838992", height: "100%", width: "40%" }}>
        #273728
      </Box>
    </Box>
    
    <Box sx={{ 
      border: "", 
      backgroundColor: "", 
      mt: "5px", 
      width: { xs: "100%", md: "50%" }, 
      height: "35px", 
      display: "flex", 
      flexDirection: "row", 
    }}>
      <Box sx={{ border: "", ml: "10px", fontSize: { xs: "20px", md: "25px" }, textAlign: "center", height: "100%", backgroundColor: "", color: "#545b68" }}>
        0.00
      </Box>
      <Box sx={{ border: "", fontSize: "16px", textAlign: "center", height: "100%", backgroundColor: "", color: "#545b68" }}>
        <Typography sx={{ mt: { xs: '5px', md: '10px' }, fontWeight: "bold" }}>USD</Typography>
      </Box>
      <Box sx={{ border: "", fontSize: "16px", textAlign: "center", height: "100%", backgroundColor: "", color: "#545b68", ml: { xs: "30px", md: "90px" }, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography sx={{ fontWeight: "bold", ml: "30px" }}><MdArrowOutward /></Typography>
      </Box>
    </Box>
  </Box>
  
  {/* second box */}
  <Box 
    sx={{ 
      border: "", 
      backgroundColor: "#fcfcfc", 
      ml: { xs: "10px", md: "20px" }, 
      mr: { xs: "10px", md: "20px" }, 
      height: "90px", 
      borderRadius: "10px",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
    }}
  >
    <Box sx={{ 
      border: "", 
      backgroundColor: "", 
      mr: { xs: "30px", md: "70px" }, 
      height: "20px", 
      display: "flex", 
      flexDirection: "column" 
    }}>
      <Typography sx={{ fontSize: { xs: "10px", md: "12px" }, fontWeight: "bold" }}>
        Master Account
      </Typography>   
    </Box>

    <Box sx={{ 
      border: "", 
      backgroundColor: "", 
      mt: "5px", 
      mr: { xs: "30px", md: "70px" }, 
      height: "20px", 
      display: "flex", 
      flexDirection: "row", 
      justifyContent: "space-evenly" 
    }}>
      <Box sx={{ border: "", fontSize: { xs: "10px", md: "12px" }, textAlign: "center", height: "100%", width: "40%", borderRadius: "10px", backgroundColor: "#f3f4f8", color: "#545b68" }}>
        CTrader
      </Box>
      <Box sx={{ border: "", fontSize: { xs: "10px", md: "12px" }, textAlign: "center", color: "#838992", height: "100%", width: "40%" }}>
        #273728
      </Box>
    </Box>
    
    <Box sx={{ 
      border: "", 
      backgroundColor: "", 
      mt: "5px", 
      width: { xs: "100%", md: "50%" }, 
      height: "35px", 
      display: "flex", 
      flexDirection: "row", 
    }}>
      <Box sx={{ border: "", ml: "10px", fontSize: { xs: "20px", md: "25px" }, textAlign: "center", height: "100%", backgroundColor: "", color: "#545b68" }}>
        0.00
      </Box>
      <Box sx={{ border: "", fontSize: "16px", textAlign: "center", height: "100%", backgroundColor: "", color: "#545b68" }}>
        <Typography sx={{ mt: { xs: '5px', md: '10px' }, fontWeight: "bold" }}>USD</Typography>
      </Box>
      <Box sx={{ border: "", fontSize: "16px", textAlign: "center", height: "100%", backgroundColor: "", color: "#545b68", ml: { xs: "30px", md: "90px" }, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography sx={{ fontWeight: "bold", ml: "30px" }}><MdArrowOutward /></Typography>
      </Box>
    </Box>
  </Box>

</Box>

      {/* Lower-left box*/}
      <Box 
        sx={{ 
          border: "", 
          backgroundColor: "", 
          mt:"-50px",
          height: "285px", 
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        }}
      >
    <Graph/>
      </Box>

      {/* Lower-right box*/}
      <Box 
        sx={{ 
          border: "", 
          backgroundColor: "white", 
          ml:"20px",
          mt:"10px",
          mr:"20px",
          height: "230px", 
          borderRadius: "10px",
          padding: "20px",
          display:"flex",
          flexDirection:"column",
          boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        }}
      >
        <Typography  sx={{fontSize:"12px", fontWeight:"bold",mt:"-10px"}}>
            Open Trades
        </Typography>
        <Box
             sx={{ 
                border: "", 
                backgroundColor: "#fcfcfc", 
                mt: "10px",
                height: "55px",  
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                }} 
        >
            <Box
                sx={{ 
                    border: "", 
                    backgroundColor: "#fcfcfc", 
                    width: "100%",
                    height: "20px",   
                    display: "flex",
                    flexDirection:"row",
                    mt:"5px",
                    borderRadius:"10px"
                    }} 
            >
                <Box
                    sx={{ 
                        border: "", 
                        backgroundColor: "#fcfcfc", 
                        width: "15%",
                        height: "20px",   
                        ml:"10px"
                        }}
                >
                    <Typography sx={{fontSize:"10px", color:"#696e7c", fontWeight:"bold", fontFamily:"sans-serif"}}>
                        GBPUSD
                    </Typography>
                </Box>
                <Box
                    sx={{ 
                        border: "", 
                        backgroundColor: "#fcfcfc", 
                        width: "15%",
                        height: "20px",   
                        ml:"10px",
                        borderRadius:"6px",
                        backgroundColor:"#f0ffea"
                        }}
                >
                    <Typography sx={{fontSize:"10px", fontWeight:"bold", fontFamily:"sans-serif", textAlign:"center"}}>
                        Long
                    </Typography>
                </Box>
                <Box
                    sx={{ 
                        border: "", 
                        backgroundColor: "#fcfcfc", 
                        width: "10%",
                        height: "20px",   
                        ml:"130px"
                        }}
                >
                    <Typography sx={{fontSize:"12px", color:"#696e7c", fontWeight:"bold", fontFamily:"sans-serif"}}>
                        0.12
                    </Typography>
                </Box>
            </Box>
            
            
            <Box
                sx={{ 
                    border: "", 
                    backgroundColor: "#fcfcfc", 
                    width: "100%",
                    height: "20px",  
                    display: "flex",
                    }} 
            >
                <Box
                    sx={{ 
                        border: "", 
                        backgroundColor: "#fcfcfc", 
                        width: "15%",
                        height: "20px",   
                        ml:"10px"
                        }}
                >
                    <Typography sx={{fontSize:"14px", color:"#17a45a", fontWeight:"bold", fontFamily:"sans-serif"}}>
                        +56.00
                    </Typography>
                </Box>
                <Box
                    sx={{ 
                        border: "", 
                        backgroundColor: "#fcfcfc", 
                        width: "15%",
                        height: "20px",   
                        
                        }}
                >
                     <Typography sx={{fontSize:"14px", color:"", fontWeight:"", fontFamily:"sans-serif"}}>
                        USD
                    </Typography>
                </Box>
                </Box>   
    </Box>

        


    <Box
        sx = {{
                border: "", 
                backgroundColor: "#fcfcfc", 
                mt: "5px",
                height: "55px",  
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        }}
        >
            <Box
                sx={{ 
                    border: "", 
                    backgroundColor: "#fcfcfc", 
                    width: "100%",
                    height: "20px",   
                    display: "flex",
                    mt:"5px",
                    borderRadius:"10px"
                    }} 
            >
                <Box
                    sx={{ 
                        border: "", 
                        backgroundColor: "#fcfcfc", 
                        width: "15%",
                        height: "20px",   
                        ml:"10px"
                        }}
                >
                    <Typography sx={{fontSize:"10px", color:"#696e7c", fontWeight:"bold", fontFamily:"sans-serif"}}>
                        USDJPY
                    </Typography>
                </Box>
                <Box
                    sx={{ 
                        border: "", 
                        backgroundColor: "#fcfcfc", 
                        width: "15%",
                        height: "20px",   
                        ml:"10px",
                        borderRadius:"6px",
                        backgroundColor:"#f0ffea"
                        }}
                >
                    <Typography sx={{fontSize:"10px", fontWeight:"bold", fontFamily:"sans-serif", textAlign:"center"}}>
                        Long
                    </Typography>
                </Box>
                <Box
                    sx={{ 
                        border: "none", 
                        backgroundColor: "#fcfcfc", 
                        width: "10%",
                        height: "20px",   
                        ml:"130px"
                        }}
                >
                    <Typography sx={{fontSize:"12px", color:"#696e7c", fontWeight:"bold", fontFamily:"sans-serif"}}>
                        0.52
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{ 
                    border: "", 
                    backgroundColor: "#fcfcfc", 
                    width: "100%",
                    height: "20px",  
                    display: "flex",
                    
                    }} 
            >
                <Box
                    sx={{ 
                        border: "", 
                        backgroundColor: "#fcfcfc", 
                        width: "15%",
                        height: "20px",   
                        ml:"10px"
                        }}
                >
                    <Typography sx={{fontSize:"16px", color:"#e02b29", fontWeight:"bold", fontFamily:"sans-serif"}}>
                        -0.09
                    </Typography>
                </Box>
                <Box
                    sx={{ 
                        border: "", 
                        backgroundColor: "#fcfcfc", 
                        width: "15%",
                        height: "20px", 
                        borderRadius:"10px"  
                        
                        }}
                >
                     <Typography sx={{fontSize:"16px", mr:"60px",color:"", fontWeight:"", fontFamily:"sans-serif"}}>
                        USD
                    </Typography>
                </Box>
                </Box> 
        </Box>
        
        
        <Box
        sx = {{
                border: "", 
                backgroundColor: "#fcfcfc", 
                mt: "5px",
                height: "60px",  
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                sm: '1 1 70%',
            }}
        >
            <Box
                sx={{ 
                    border: "", 
                    backgroundColor: "#fcfcfc", 
                    width: "100%",
                    height: "20px",   
                    display: "flex",
                    borderRadius: "20px",
                    mt:"5px"
                    }} 
            >
                <Box
                    sx={{ 
                        border: "", 
                        backgroundColor: "#fcfcfc", 
                        width: "15%",
                        height: "20px",   
                        ml:"10px"
                        }}
                >
                    <Typography sx={{fontSize:"10px", color:"#696e7c", fontWeight:"bold", fontFamily:"sans-serif"}}>
                        EURUSD
                    </Typography>
                </Box>
                <Box
                    sx={{ 
                        border: "", 
                        backgroundColor: "#fcfcfc", 
                        width: "15%",
                        height: "20px",   
                        ml:"10px",
                        borderRadius:"6px",
                        backgroundColor:"#ffe8e7"
                        }}
                >
                    <Typography sx={{fontSize:"10px", fontWeight:"bold", fontFamily:"sans-serif", textAlign:"center"}}>
                        Short
                    </Typography>
                </Box>
                <Box
                    sx={{ 
                        border: "", 
                        backgroundColor: "#fcfcfc", 
                        width: "10%",
                        height: "20px",   
                        ml:"130px"
                        }}
                >
                    <Typography sx={{fontSize:"12px", color:"#696e7c", fontWeight:"bold", fontFamily:"sans-serif"}}>
                        0.12
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{ 
                    border: "", 
                    backgroundColor: "#fcfcfc", 
                    width: "100%",
                    height: "20px",  
                    display: "flex",
                    borderRadius:"10px"
                    }} 
            >
                <Box
                    sx={{ 
                        border: "", 
                        backgroundColor: "#fcfcfc", 
                        width: "15%",
                        height: "20px",   
                        ml:"10px"
                        }}
                >
                    <Typography sx={{fontSize:"16px", color:"#e02b29", fontWeight:"bold", fontFamily:"sans-serif"}}>
                        -1.09
                    </Typography>
                </Box>
                <Box
                    sx={{ 
                        border: "", 
                        backgroundColor: "#fcfcfc", 
                        width: "15%",
                        height: "20px",   
                        
                        }}
                >
                     <Typography sx={{fontSize:"14px", color:"", fontWeight:"", fontFamily:"sans-serif"}}>
                        USD
                    </Typography>
                </Box>
                </Box> 
        </Box>
      </Box>
    </Box>
  )
}

export default Main;