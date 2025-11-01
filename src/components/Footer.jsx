import { Box, Button, Container, Grid, List, ListItem, ListItemButton, ListItemIcon, TextField, Typography } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from '../assets/logo.png'

import React from 'react'

export default function Footer() {
  return (
    <Box sx={{backgroundColor:"#E5E1D6",padding:"100px 0" }}>
    <Container maxWidth="lg"  >
    <Grid container spacing={10}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Box component="img" src={logo} sx={{ width: "100px" }}></Box>
        <Typography sx={{color:"gray"}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</Typography>


        <List sx={{  display:"flex",gap:"2px"}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon >
                <FacebookOutlinedIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
              <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon >
                <InstagramIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
              <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon >
                <TwitterIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
              <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon >
              <LinkedInIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Grid>
      <Grid size={{ xs: 6, md: 2 }} >
        <Typography variant='h5'>COMPANY</Typography>
<List sx={{  }}>
          <ListItem sx={{mb:"7px"}} disablePadding>about</ListItem>
          <ListItem sx={{mb:"7px"}} disablePadding>Blog</ListItem>
          <ListItem sx={{mb:"7px"}} disablePadding>Terms & Conditions</ListItem>
          <ListItem sx={{mb:"7px"}} disablePadding>Privacy Policy</ListItem>
          <ListItem sx={{mb:"7px"}} disablePadding>Contact Us</ListItem>
          </List>
      </Grid>
      <Grid size={{ xs: 6, md: 2 }}>
        <Typography variant='h5'>SUPPORT</Typography>
<List sx={{  }}>
          <ListItem sx={{mb:"7px"}} disablePadding>about</ListItem>
          <ListItem sx={{mb:"7px"}} disablePadding>Blog</ListItem>
          <ListItem sx={{mb:"7px"}} disablePadding>Terms & Conditions</ListItem>
          <ListItem sx={{mb:"7px"}} disablePadding>Privacy Policy</ListItem>
          <ListItem sx={{mb:"7px"}} disablePadding>Contact Us</ListItem>
          </List>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
<Typography variant='h5' sx={{mb:"10px"}}>STAY UPDATED</Typography>
<Typography sx={{color:"gray",mb:"10px"}}> Subscribe to our newsletter for inspiration and special offers.</Typography>
{/* <Box
      sx={{
        display: "flex",
        alignItems: "center",
        // justifyContent:  "flex-end",
        backgroundColor: "white",
        borderRadius: "70px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        // width: showSearch ? "400px" : "40px",
        height: "40px",
        transition: "all 0.3s ease",
        overflow: "hidden",
      }}
    >
<TextField
          id="filled-basic"
          label="Write something..."
          variant="standard"
          fullWidth
          autoFocus
          InputProps={{
            disableUnderline: true,
          }}
          sx={{
            ml: 2,
            mr: 2,
            border: "none",
            outline: "none",
            "& .MuiInputBase-input": {
              paddingY: 1,
            },
          }}
        />
<Button variant="contained" sx={{backgroundColor:"#E3B300",borderRadius:"25px",padding:"5px 10px",color:"black",}}>get </Button>

        </Box> */}

        <Box
  sx={{
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "50px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
    height: "48px",
    px: 2,
    border: "1px solid grey",
    gap: 1,
    transition: "0.3s",
  }}
>
  <TextField
    id="search-input"
    label="Write something..."
    variant="standard"
    fullWidth
    autoFocus
    InputProps={{
      disableUnderline: true,
    }}
    sx={{
      "& .MuiInputBase-input": {
        paddingY: 1,
      },
    }}
  />

  <Button
    variant="contained"
    sx={{
      backgroundColor: "#2E2D2B",
      borderRadius: "25px",
      px: 3,
      py: 0.5,
      color: "white",
      textTransform: "none",
      fontWeight: 600,
      "&:hover": {
        backgroundColor: "#2E2D2B",
      },
    }}
  >
    Subscribe
  </Button>
</Box>

      </Grid>
    </Grid>
    </Container>
    </Box>
  )
}
