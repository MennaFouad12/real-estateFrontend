// import { Box, TextField, Typography } from '@mui/material'
// import bg from "../assets/bg.png";
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import LoginIcon from '@mui/icons-material/Login';
// import LogoutIcon from '@mui/icons-material/Logout';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import React from 'react'

// export default function Home() {
//   return (
//   <Box>
//   <Box
//       sx={{
//         height: "100vh", // full page
//         backgroundImage: `url(${bg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         display: "flex",
//         alignItems: "end",
//         justifyContent: "center",
//       }}
//     >
//       <Box>
//       <Typography variant="h1" color="white" sx={{ fontSize: "3rem" }}>
//       Explore exceptional properties located in stunning surroundings.
//       </Typography>
//       <Box sx={{backgroundColor:'white',padding:'20px 20px',borderRadius:'10px', margin:'20px 0',display:'flex',justifyContent:'space-between',gap:'20px'}}>
// <Box >
// <Typography variant='h6' sx={{ color: 'grey' ,mb:"10px"}} ><LocationOnIcon sx={{mr:"5px"}}  /> Destenation</Typography>
//   <TextField
//   size="small"
//     id="outlined-basic"
//     label="type here"
//     variant="outlined"
//     InputLabelProps={{ style: { color: 'grey' } }}
//     InputProps={{ style: { color: 'grey' } }}
//     sx={{
//       '& .MuiOutlinedInput-root': {
//         '& fieldset': { borderColor: 'grey' },
//         '&:hover fieldset': { borderColor: '#ccc' },
//         '&.Mui-focused fieldset': { borderColor: 'grey' }
//       }
//     }}
//   />
// </Box>

// <Box >
// <Typography variant='h6' sx={{ color: 'grey' ,mb:"10px"}} ><LoginIcon sx={{mr:"5px"}}  /> Check in</Typography>
//   <TextField
//   size="small"
//     type="date"
//     id="outlined-basic"
  
//     variant="outlined"
//     InputLabelProps={{ style: { color: 'grey' } }}
//     InputProps={{ style: { color: 'grey' } }}
//     sx={{
//       '& .MuiOutlinedInput-root': {
//         '& fieldset': { borderColor: 'grey' },
//         '&:hover fieldset': { borderColor: '#ccc' },
//         '&.Mui-focused fieldset': { borderColor: 'grey' }
//       }
//     }}
//   />
// </Box>


// <Box >
// <Typography variant='h6' sx={{ color: 'grey' ,mb:"10px"}} ><LogoutIcon sx={{mr:"5px"}}  /> Check out</Typography>
//   <TextField
//   size="small"
//     type="date"
//     id="outlined-basic"
  
//     variant="outlined"
//     InputLabelProps={{ style: { color: 'grey' } }}
//     InputProps={{ style: { color: 'grey' } }}
//     sx={{
//       '& .MuiOutlinedInput-root': {
//         '& fieldset': { borderColor: 'grey' },
//         '&:hover fieldset': { borderColor: '#ccc' },
//         '&.Mui-focused fieldset': { borderColor: 'grey' }
//       }
//     }}
//   />
// </Box>



// <Box >
// <Typography variant='h6' sx={{ color: 'grey' ,mb:"10px"}} ><PeopleAltIcon sx={{mr:"5px"}}  /> Gausts</Typography>
//   <TextField
//   size="small"
//     type="date"
//     id="outlined-basic"
  
//     variant="outlined"
//     InputLabelProps={{ style: { color: 'grey' } }}
//     InputProps={{ style: { color: 'grey' } }}
//     sx={{
//       '& .MuiOutlinedInput-root': {
//         '& fieldset': { borderColor: 'grey' },
//         '&:hover fieldset': { borderColor: '#ccc' },
//         '&.Mui-focused fieldset': { borderColor: 'grey' }
//       }
//     }}
//   />
// </Box>
//       </Box>
//     </Box>
//   </Box>
//   </Box>
//   )
// }










import { Box, TextField, Typography, Button } from '@mui/material'
import bg from "../assets/bg.png";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import Landing from '../components/Landing';
import Info from '../components/Info';
import Products from '../components/Products';
import Giude from '../components/Giude';
import Experts from '../components/experts';

export default function Home() {
  return (
    <Box>
      <Landing />
      <Info></Info>
      <Products></Products>
      <Giude></Giude>
      <Experts></Experts>
    </Box>
  )
}

  // <Box
  //       sx={{
  //         height: "100vh",
  //         backgroundImage: `url(${bg})`,
  //         backgroundSize: "cover",
  //         backgroundPosition: "center",
  //         backgroundRepeat: "no-repeat",
  //         display: "flex",
  //         alignItems: "end",
  //         justifyContent: "center",
  //         p: 2,
  //       }}
  //     >
  //       <Box textAlign="center" sx={{ width: "100%", maxWidth: "1100px" }}>
  //         <Typography variant="h1" color="white" sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 3 }}>
  //           Explore <span style={{
  //   background: "linear-gradient(90deg, #FDC700, #ffe680)",
  //   WebkitBackgroundClip: "text",
  //   WebkitTextFillColor: "transparent",
  //   fontWeight: "bold"
  // }}>exceptional properties</span> in stunning destinations.
  //         </Typography>

  //         {/* Search Bar Container */}
  //         <Box
  //           sx={{
  //             backgroundColor: 'white',
  //             padding: '20px',
  //             borderRadius: '16px',
  //             boxShadow: '0 6px 18px rgba(0,0,0,0.15)',
  //             display: "flex",
  //             flexWrap: "wrap",
  //             gap: 2,
  //             justifyContent: "space-between"
  //           }}
  //         >

  //           {/* Destination */}
  //           <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 22%" } }}>
  //             <Typography variant='h6' sx={{ color: 'grey', mb: "8px" }}>
  //               <LocationOnIcon sx={{ mr: "5px" }} /> Destination
  //             </Typography>
  //             <TextField fullWidth size="small" label="Type here..." />
  //           </Box>

  //           {/* Check In */}
  //           <Box sx={{ flex: { xs: "1 1 48%", md: "1 1 18%" } }}>
  //             <Typography variant='h6' sx={{ color: 'grey', mb: "8px" }}>
  //               <LoginIcon sx={{ mr: "5px" }} /> Check in
  //             </Typography>
  //             <TextField fullWidth size="small" type="date" InputLabelProps={{ shrink: true }} />
  //           </Box>

  //           {/* Check Out */}
  //           <Box sx={{ flex: { xs: "1 1 48%", md: "1 1 18%" } }}>
  //             <Typography variant='h6' sx={{ color: 'grey', mb: "8px" }}>
  //               <LogoutIcon sx={{ mr: "5px" }} /> Check out
  //             </Typography>
  //             <TextField fullWidth size="small" type="date" InputLabelProps={{ shrink: true }} />
  //           </Box>

  //           {/* Guests */}
  //           <Box sx={{ flex: { xs: "1 1 48%", md: "1 1 15%" } }}>
  //             <Typography variant='h6' sx={{ color: 'grey', mb: "8px" }}>
  //               <PeopleAltIcon sx={{ mr: "5px" }} /> Guests
  //             </Typography>
  //             <TextField fullWidth size="small" type="number" inputProps={{ min: 1 }} placeholder="1" />
  //           </Box>

  //           {/* Search Button */}
  //           <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 auto" }, display: "flex", alignItems: "end" }}>
  //             <Button
  //               fullWidth={{ xs: true, md: false }}
  //               variant="contained"
  //               sx={{
  //                 height: 40,
  //                 borderRadius: "8px",
  //                 textTransform: "none",
  //                 width: { xs: "100%", md: "auto" },
  //                 backgroundColor:'black',
  //                 color:'white'
  //               }}
  //               startIcon={<SearchIcon />}
  //             >
  //               Search
  //             </Button>
  //           </Box>

  //         </Box>
  //       </Box>
  //     </Box>