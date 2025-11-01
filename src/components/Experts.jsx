import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

export default function Experts() {
  return (
  <Box sx={{backgroundColor:"#E5E1D6",padding:"100px 0",display:"flex",justifyContent:"center",alignItems:"center" }}>
    <Container maxWidth="md" sx={{textAlign:"center"}} >
<Button variant="contained" sx={{backgroundColor:"#2E2D2B",color:"white",borderRadius:"25px",fontSize:"12px",padding:"5px 10px",mb:"20px"}}>Trusted by Experts</Button>
<Typography variant='h4' sx={{color:"#2E2D2B",fontWeight:"bold",mb:"20px"}}> Sell or Rent Faster with <span style={{color:"#E3B300"}}> Expert Strategies</span>
and Real Support!</Typography>
<Typography sx={{color:"gray",mb:"20px"}}>Achieve your goals faster with personalized strategies, hands-on support, and results that speak for themselves.</Typography>
<Button variant="contained" sx={{backgroundColor:"#E3B300",borderRadius:"25px",padding:"10px 20px",color:"black",mb:"20px"}}>get started</Button>

    </Container>
    </Box>
  )
}
