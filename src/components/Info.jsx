// import { Avatar, AvatarGroup, Box, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Rating, Typography } from '@mui/material'
// import InboxIcon from '@mui/icons-material/Inbox';
// import React from 'react'
// import about from '../assets/about.png'
// import client1 from '../assets/client1.jpg'
// import client2 from '../assets/client2.jpg'
// import client3 from '../assets/client3.jpg'
// import client4 from '../assets/client4.jpg'



// export default function Info () {
//   return (
//     <Box sx={{backgroundColor:"#E5E3DD",padding:"150px 0"}}>
//     <Container >
//     <Box sx={{display:'flex' ,justifyContent:'space-between',gap:"20px"}}>
// <Box sx={{maxWidth:"55%"}}>
//   <Typography sx={{color:'#E3B300',fontWeight:"bold"}} >Your Trusted Real Estate Partner</Typography>
//   <Typography variant='h4' sx={{color:"#2E2D2B",mb:"20px",fontWeight:"bold",fontSize:"40px"}}>Helping You Every Step of the Way</Typography>
//   <Typography  sx={{color:"grey"}}>Trust, clarity, and simplicity are at the core of everything we do to make your property journey easy.</Typography>
  
//   <List sx={{my:"30px"}}>
// <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemIcon sx={{color:"#E3B300"}}>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText sx={{color:'grey'}} primary="In-app scheduling for property viewings" />
//             </ListItemButton>
//           </ListItem>
// <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemIcon sx={{color:"#E3B300"}}>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText sx={{color:'grey'}} primary="Real-time market price updates" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding >
//             <ListItemButton>
//               <ListItemIcon sx={{color:"#E3B300"}}>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText sx={{color:'grey'}} primary="User-friendly interface for smooth navigation" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemIcon sx={{color:"#E3B300"}}> 
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText sx={{color:'grey'}} primary="Access to off-market properties" />
//             </ListItemButton>
//           </ListItem>

//   </List>
// <Box sx={{display:"flex",alignItems:"center",gap:"20px"}}>
//   <AvatarGroup max={4} sx={{borderRight:"1px solid grey",padding:"10px",
//   }}>
//   <Avatar alt="Remy Sharp" src={client1}/>
//   <Avatar alt="Travis Howard" src={client2} />
//   <Avatar alt="Cindy Baker" src={client3} />
//   <Avatar alt="Agnes Walker" src={client4 } />

// </AvatarGroup>
// <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
// </Box>
// </Box>
// <Box component="img" src={about} sx={{maxWidth:"50%"}}></Box>
//     </Box>
//     </Container>
//     </Box>
//   )
// }




import { Avatar, AvatarGroup, Box, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Rating, Typography } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import React from 'react'
import about from '../assets/about.png'
import client1 from '../assets/client1.jpg'
import client2 from '../assets/client2.jpg'
import client3 from '../assets/client3.jpg'
import client4 from '../assets/client4.jpg'

export default function Info() {
  return (
    <Box sx={{ backgroundColor: "#E5E3DD", py: { xs: 8, md: 12 } }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "30px",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >
          {/* LEFT CONTENT */}
          <Box sx={{ maxWidth: { xs: "100%", md: "55%" } }}>
            <Typography sx={{ color: '#E3B300', fontWeight: "bold", mb: 1 }}>
              Your Trusted Real Estate Partner
            </Typography>

            <Typography
              variant='h4'
              sx={{
                color: "#2E2D2B",
                mb: 2,
                fontWeight: "bold",
                fontSize: { xs: "28px", md: "40px" }
              }}
            >
              Helping You Every Step of the Way
            </Typography>

            <Typography sx={{ color: "grey", fontSize: { xs: "14px", md: "16px" } }}>
              Trust, clarity, and simplicity are at the core of everything we do to make your property journey easy.
            </Typography>

            <List sx={{ my: 3 }}>
              {[
                "In-app scheduling for property viewings",
                "Real-time market price updates",
                "User-friendly interface for smooth navigation",
                "Access to off-market properties"
              ].map((text, i) => (
                <ListItem disablePadding key={i}>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "#E3B300" }}>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ color: 'grey' }} primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>

            {/* Avatars + Rating */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <AvatarGroup max={4} sx={{ borderRight: "1px solid grey", pr: 2 }}>
                <Avatar alt="Remy Sharp" src={client1} />
                <Avatar alt="Travis Howard" src={client2} />
                <Avatar alt="Cindy Baker" src={client3} />
                <Avatar alt="Agnes Walker" src={client4} />
              </AvatarGroup>

              <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
            </Box>
          </Box>

          {/* RIGHT IMAGE */}
          <Box
            component="img"
            src={about}
            sx={{
              maxWidth: { xs: "100%", md: "45%" },
              borderRadius: "10px",
              objectFit: "cover"
            }}
          />
        </Box>
      </Container>
    </Box>
  )
}
