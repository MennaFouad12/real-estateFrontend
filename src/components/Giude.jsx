// import { Avatar, AvatarGroup, Box, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Rating, Typography } from '@mui/material'
// import InboxIcon from '@mui/icons-material/Inbox';
// import React from 'react'
// import about from '../assets/faq.png'
// import client1 from '../assets/client1.jpg'
// import client2 from '../assets/client2.jpg'
// import client3 from '../assets/client3.jpg'
// import client4 from '../assets/client4.jpg'
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// // import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// export default function Giude () {
//   return (
//     <Box sx={{backgroundColor:"#E5E3DD",padding:"150px 0"}}>
//     <Container >
//     <Box sx={{display:'flex' ,justifyContent:'space-between',alignItems:"center",gap:"40px"}}>
//       <Box component="img" src={about} sx={{maxWidth:"50%",borderRadius:"15px"}}></Box>
    
// <Box sx={{maxWidth:"50%"}}>
//   <Typography sx={{color:'#E3B300',fontWeight:"bold"}} >
// Homes Made for Living</Typography>
//   <Typography variant='h4' sx={{color:"#2E2D2B",mb:"20px",fontWeight:"bold",fontSize:"40px"}}>Simplifying Your Property Search Every Step</Typography>
//   <Typography  sx={{color:"grey",mb:"20px"}}>From finding the right location to finalizing the deal, we ensure your real estate journey is smooth, efficient, and fulfilling.</Typography>




//   <div>
//       <Accordion sx={{mb:'20px',backgroundColor:"#E4DFCA",borderRadius:"15px"}}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1-content"
//           id="panel1-header"
//         >
//           <Typography component="span">Accordion 1</Typography>
//         </AccordionSummary>
//       <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
        
//       <Accordion  sx={{mb:'20px',backgroundColor:"#E4DFCA",borderRadius:"15px",outline:"none",border:"none"}}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//         >
//           <Typography component="span">Accordion 2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion  sx={{mb:'20px',backgroundColor:"#E4DFCA",borderRadius:"15px",outline:"none",border:"none"}}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//         >
//           <Typography component="span">Accordion 2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion  sx={{mb:'20px',backgroundColor:"#E4DFCA",borderRadius:"15px",outline:"none",border:"none"}}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//         >
//           <Typography component="span">Accordion 2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion  sx={{mb:'20px',backgroundColor:"#E4DFCA",borderRadius:"15px",outline:"none",border:"none"}}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//         >
//           <Typography component="span">Accordion 2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
    
//     </div>

// </Box>

// </Box>
//     </Container>
//     </Box>
//   )
// }




import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import about from '../assets/faq.png'

export default function Giude() {
  return (
    <Box sx={{ backgroundColor: "#E5E3DD", py: { xs: 8, md: 12 } }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "40px",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* LEFT IMAGE */}
          <Box
            component="img"
            src={about}
            sx={{
              maxWidth: { xs: "100%", md: "50%" },
              borderRadius: "15px",
              objectFit: "cover",
            }}
          />

          {/* RIGHT CONTENT */}
          <Box sx={{ maxWidth: { xs: "100%", md: "50%" } }}>
            <Typography sx={{ color: '#E3B300', fontWeight: "bold", mb: 1 }}>
              Homes Made for Living
            </Typography>

            <Typography
              variant="h4"
              sx={{
                color: "#2E2D2B",
                mb: 2,
                fontWeight: "bold",
                fontSize: { xs: "28px", md: "40px" }
              }}
            >
              Simplifying Your Property Search Every Step
            </Typography>

            <Typography sx={{ color: "grey", mb: 3 }}>
              From finding the right location to finalizing the deal, we ensure your real estate journey is smooth, efficient, and fulfilling.
            </Typography>

            {/* ACCORDIONS */}
            {[
              "Accordion 1",
              "Accordion 2",
              "Accordion 3",
              "Accordion 4",
              "Accordion 5",
            ].map((label, i) => (
              <Accordion
                key={i}
                sx={{
                  mb: 2,
                  backgroundColor: "#E4DFCA",
                  borderRadius: "15px",
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography component="span">{label}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}

          </Box>
        </Box>
      </Container>
    </Box>
  );
}
