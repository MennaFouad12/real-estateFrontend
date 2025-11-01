import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

// import IconButton from "@mui/material";

import SearchBox from './SearchBox';
import SendIcon from '@mui/icons-material/Send';
import logo from '../assets/logo.png'
import { useUserStore } from '../store/userStore';
import { useLocation, useNavigate } from 'react-router-dom';
const pages = ['Home', 'Listings', 'Blog', 'Contact', 'Dashboard'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, setUser, logout } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();
  const isLanding = location.pathname === "/home";


  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (page) => {
    navigate(`/${page.toLowerCase()}`);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed"
      sx={{
        background: scrolled ? "white" : "transparent",
        boxShadow: (scrolled || !isLanding) ? "0 2px 10px rgba(0,0,0,0.4)" : "none",
        transition: "0.4s ease",
      }}>
      <Container disableGutters>
        <Toolbar disableGutters sx={{ position: 'relative', px: 2 }}>
          {/* --- Left Side: Logo --- */}
          <Box component="img" src={logo} sx={{ display: 'flex', width: "100px", alignItems: 'center' }}>

          </Box>

          {/* --- Center: Pages --- */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              display: { xs: 'none', md: 'flex' },
              gap: 2,

            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavigate(page)}

                sx={{ color: (scrolled || !isLanding) ? 'black' : 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* --- Right Side: Avatar --- */}
          <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            {/* Mobile Menu Icon */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Avatar + Menu */}
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}

            <SearchBox></SearchBox>
            {user ? (
              <Button onClick={() =>{ 
                // logout();
                handleNavigate("Login")}} variant="contained" sx={{ backgroundColor: "#FDC700", color: "black", borderRadius: "50px", padding: "10px 20px", marginLeft: "5px" }} endIcon={<SendIcon />}>
              Logout
            </Button>
            ):(

  <Button onClick={() => handleNavigate("Login")} variant="contained" sx={{ backgroundColor: "#FDC700", color: "black", borderRadius: "50px", padding: "10px 20px", marginLeft: "5px" }} endIcon={<SendIcon />}>
              Login
            </Button>

            )
            
            
            }
          
            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>

          {/* --- Mobile Menu --- */}
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
