import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { RiLogoutBoxLine, RiSettings4Line, RiWalletLine } from "react-icons/ri";
import { PiHeadphones, PiBellSimpleLight } from "react-icons/pi";
import { LiaBellSolid } from "react-icons/lia";
import { VscHistory } from "react-icons/vsc";
import { FiBox, FiPieChart } from "react-icons/fi";

import { RiSearch2Line } from "react-icons/ri";
import image from '../assets/react.svg';
import dashboard from '../assets/dashboard.svg'
import copilot from '../assets/copilot.svg'
import swap from '../assets/swap.svg'
import account from '../assets/account.svg'
import './style.css';

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, bgcolor: "white" }}
      >
        <Toolbar>
          <Typography sx={{ color: "black" }}>
            Dashboard
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "row", ml: "auto", alignItems: "center" }}>
            <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
              <RiSearch2Line style={{ position: "absolute", left: "10px", color: "black" }} />
              <input
                type="text"
                placeholder='Search...'
                style={{
                  paddingLeft: "40px",
                  border: "1px solid black",
                  borderRadius: "4px",
                  height: "30px",
                }}
              />
            </Box>
            <Typography sx={{ color: "black", marginLeft: "30px", marginTop: "2px" }}>
              <PiBellSimpleLight style={{ width: "40px" }} />
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: "#9b76d6",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <img src={image} alt="" style={{ position: "absolute", width: "120.16px", height: "57.95px", left: "54.46px", top: "27px" }} />
        <br /> <br /> 
       <List sx={{ fontSize: "14px", whiteSpace: "2px", top: "2px" }}>
          <ul style={{ marginLeft: "10px", color: "white", listStyleType: "none" }}>
            <li style={{ marginBottom: "10px",color:"#BEFB7A" }}> <img src={dashboard} alt="" style={{ marginRight: "10px" }}/> Dashboard</li>
            <li style={{ marginBottom: "10px" }}> <img src={copilot} alt="" style={{ marginRight: "10px" }}/> CRM</li>
            <li style={{ marginBottom: "10px" }}><FiBox style={{ marginRight: "10px" }} />MAM</li>
            <li style={{ marginBottom: "10px" }}><FiPieChart style={{ marginRight: "10px" }} />PAMM</li>
            <li style={{ marginBottom: "10px", display: "flex", flexDirection: "row" }}>
              <img src={swap} alt="" style={{ marginRight: "10px" }}/>
              Trade
            </li>
            <li style={{ marginBottom: "10px" }}><RiWalletLine style={{ marginRight: "10px" }} />Wallet</li>
            <li style={{ marginBottom: "10px" }}><img src={account} alt='' style={{ marginRight: "10px" }} />Account</li>
            <li style={{ marginBottom: "10px" }}><VscHistory style={{ marginRight: "10px" }} />History</li>
          </ul>
        </List>
        <br /> <br /> <br />
        <Divider />

        <List sx={{ fontSize: "14px", whiteSpace: "2px" }}>
          <ul style={{ marginLeft: "2px", color: "white", listStyleType: "none" }}>
            <li style={{ marginBottom: "10px" }}><LiaBellSolid style={{ marginRight: "10px" }} />Notifications</li>
            <li style={{ marginBottom: "10px" }}><RiSettings4Line style={{ marginRight: "10px" }} />Settings</li>
            <li style={{ marginBottom: "10px" }}><PiHeadphones style={{ marginRight: "10px" }} />Help & Support</li>
            <li style={{ marginBottom: "10px" }}><RiLogoutBoxLine style={{ marginRight: "10px" }} />Log Out</li>
          </ul>
        </List>

        <Divider />
      </Drawer>
    </Box>
  );
};

export default Sidebar;
