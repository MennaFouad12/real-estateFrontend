// import {
//   Box,
//   Grid,
//   Typography,
//   TextField,
//   Button,
//   Rating,
// } from "@mui/material";
// import { useParams } from "react-router-dom";
// import { products } from "./Products";
// import BedIcon from "@mui/icons-material/Bed";
// import BathtubIcon from "@mui/icons-material/Bathtub";
// import GarageIcon from "@mui/icons-material/Garage";
// import SquareFootIcon from "@mui/icons-material/SquareFoot";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { use } from "react";
// import { fetchSingleProperty } from "../api/property";
// import { useQuery } from "@tanstack/react-query";

// export default function ProductDetails() {
//   const { id } = useParams();
//   // const product = products.find((p) => p.id === parseInt(id));
//    const { data: property, isLoading, isError, error } = useQuery({
//   queryKey: ['property', id],
//   queryFn: () => fetchSingleProperty(id),
// })
// // if(property) console.log( "property",property);
//   // if (!property) return <Typography>Property not found</Typography>;
// if (isLoading) return <Typography>Loading...</Typography>;
// if (isError) return <Typography>Error: {error.message}</Typography>;
// if (!property?.data) return <Typography>No property data found</Typography>;
//   return (
//     <Box sx={{ backgroundColor: "#F7F5F2", py: 6 }}>
//       <Grid container spacing={4} sx={{ maxWidth: 1200, mx: "auto" }}>
//         {/* Left Section */}
//         <Grid item xs={12} md={8}>
//           <Box
//             component="img"
//           src={property?.data?.images?.[0]?.url || "/placeholder.jpg"}
// alt={property?.data?.propertyName || "Property Image"}
//             sx={{
//               width: "100%",
//               borderRadius: 3,
//               mb: 3,
//             }}
//           />

//           <Typography
//             variant="h4"
//             sx={{ fontWeight: "bold", color: "#2E2D2B", mb: 1 }}
//           >
//             {property?.data.propertyName}
//           </Typography>

//           <Typography sx={{ color: "#E3B300", fontWeight: "bold", mb: 1 }}>
//             {property?.data.propertyType}
//           </Typography>

//           <Typography sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//             <LocationOnIcon sx={{ mr: 1, color: "gray" }} /> 789 Park Lane,
//             NewYork, USA
//           </Typography>

//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               mb: 2,
//             }}
//           >
//             <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
//               ${property?.data.rentPrice} | ${property?.data.rentPrice}/night
//             </Typography>

//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <Rating value={5} readOnly precision={0.5} />
//               <Typography sx={{ ml: 1, fontWeight: "bold" }}>5.0</Typography>
//             </Box>
//           </Box>

//           <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
//               <BedIcon /> {property?.data.bedrooms}
//             </Box>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
//               <BathtubIcon /> {property?.data.bathrooms}
//             </Box>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
//               <GarageIcon /> 3
//             </Box>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
//               <SquareFootIcon /> {property?.data.area} sq ft
//             </Box>
//           </Box>

//           <Typography sx={{ color: "gray", mb: 3 }}>
//             {property?.data.description}
//           </Typography>
//         </Grid>

//         {/* Right Section - Contact Form */}
//         <Grid item xs={12} md={4}>
//           <Box
//             sx={{
//               bgcolor: "#fff",
//               p: 3,
//               borderRadius: 3,
//               boxShadow: 2,
//             }}
//           >
//             <Typography variant="h6" fontWeight="bold" mb={2}>
//               Contact Agent
//             </Typography>

//             <TextField fullWidth label="Your Name" margin="dense" />
//             <TextField fullWidth label="Your Email" margin="dense" />
//             <TextField
//               fullWidth
//               label="Your Message"
//               multiline
//               rows={3}
//               margin="dense"
//             />

//             <Button
//               fullWidth
//               variant="contained"
//               sx={{
//                 mt: 2,
//                 bgcolor: "#E3B300",
//                 color: "#000",
//                 fontWeight: "bold",
//                 "&:hover": { bgcolor: "#d2a700" },
//               }}
//             >
//               Send Message
//             </Button>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }






















import React from "react";
import {
  Box,
  Grid,
  Typography,
  Rating,
  Button,
  TextField,
  Chip,
  Avatar,
  Divider,
  Container,
  InputAdornment,
} from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import GarageIcon from "@mui/icons-material/Garage";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PeopleIcon from "@mui/icons-material/People";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchSingleProperty } from "../api/property";

export default function ProductDetails() {
    const { id } = useParams();
  // const product = products.find((p) => p.id === parseInt(id));
   const { data: property, isLoading, isError, error } = useQuery({
  queryKey: ['property', id],
  queryFn: () => fetchSingleProperty(id),
})
// if(property) console.log( "property",property);
  // if (!property) return <Typography>Property not found</Typography>;
if (isLoading) return <Typography>Loading...</Typography>;
if (isError) return <Typography>Error: {error.message}</Typography>;
  return (
   <Box sx={{ backgroundColor: "#fff8e1", py: 6 }}>
      <Container
        maxWidth="lg"
        sx={{
          overflowX: "hidden", // يمنع الـ scroll الأفقي
        }}
      >
            <Box
            component="img"
          src={property?.data?.images?.[0]?.url || "/placeholder.jpg"}
alt={property?.data?.propertyName || "Property Image"}
            sx={{
              width: "100%",
              borderRadius: 3,
              mb: 3,
            }}
          />
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // جنب بعض في الديسكتوب
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          {/* ✅ LEFT SECTION */}
          <Grid item xs={12} md={8}  sx={{
              width: { xs: "100%", md: "65%" }, // ياخد 65% من العرض في الديسكتوب
            }}>
            {/* Address */}
            <Typography
              sx={{ display: "flex", alignItems: "center", color: "gray", mb: 1 }}
            >
              <LocationOnIcon sx={{ mr: 1 }} /> {property?.data?.address}
            </Typography>

            {/* Title */}
            <Typography variant="h4" fontWeight="bold">
              {property?.data?.propertyName}
            </Typography>

            {/* Price */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                my: 1,
                flexWrap: "wrap",
              }}
            >
              <Typography sx={{ fontSize: 20, fontWeight: "bold",color: "#E3B300" }}>
                ${property?.data?.rentPrice} | ${property?.data?.rentPrice}/night
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mt: { xs: 1, md: 0 } }}>
                <Typography sx={{ mr: 1, fontWeight: "bold" }}>5.0</Typography>
                <Rating value={5} readOnly precision={0.5} />
              </Box>
            </Box>

            <Typography sx={{ color: "#E3B300", fontWeight: "bold", mb: 2 }}>
              {property?.data?.propertyType}
            </Typography>

            {/* Icons Row */}
            <Box sx={{ display: "flex", gap: 3, mb: 3, flexWrap: "wrap" ,  color: "grey",}}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <BedIcon /> {property?.data?.bedrooms}
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <BathtubIcon /> {property?.data?.bathrooms}
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <GarageIcon /> 1
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <SquareFootIcon /> {property?.data?.area} sq ft
              </Box>
            </Box>

            {/* Property Description */}
            <Typography variant="h6" fontWeight="bold" mb={1}>
              Property Details
            </Typography>
            <Typography sx={{ color: "gray", mb: 3 }}>
              {property?.data?.propertyDescription}
            </Typography>

            {/* Amenities */}
            <Typography variant="h6" fontWeight="bold" mb={1}>
              Amenities
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 3 }}>
              {["Parking", "Wifi", "Backyard", "Terrace"].map((amenity) => (
                <Chip
                  key={amenity}
                  label={amenity}
                  sx={{
                    bgcolor: "#fff4d2",
                    borderRadius: "6px",
                    color: "#333",
                    fontWeight: 500,
                  }}
                />
              ))}
            </Box>

            {/* Check-in Section */}
            <Box
              sx={{
                bgcolor: "#fff4d2",
                p: 2,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              <TextField
                label="Check in"
                type="date"
                InputLabelProps={{ shrink: true }}
                sx={{ bgcolor: "#fff", borderRadius: 1, flex: 1 }}
              />
              <TextField
                label="Check out"
                type="date"
                InputLabelProps={{ shrink: true }}
                sx={{ bgcolor: "#fff", borderRadius: 1, flex: 1 }}
              />
              <TextField
                label="Guests"
                type="number"
                defaultValue={1}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PeopleIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ bgcolor: "#fff", borderRadius: 1, flex: 1 }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#000",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: "bold",
                  "&:hover": { bgcolor: "#333" },
                  flex: 1,
                  minWidth: 150,
                }}
              >
                <SearchIcon sx={{ mr: 1 }} /> Check Dates
              </Button>
            </Box>
          </Grid>

          {/* ✅ RIGHT SECTION */}
          <Grid   item
            xs={12}
            md={4}
            sx={{
              width: { xs: "100%", md: "30%" }, // ياخد 30% من العرض في الديسكتوب
            }}>
            {/* Contact Agent */}
            <Box
              sx={{
                bgcolor: "#fff",
                p: 3,
                borderRadius: 3,
                boxShadow: 2,
                mb: 3,
              }}
            >
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Contact Agent
              </Typography>

              <TextField fullWidth label="Your Name" margin="dense" />
              <TextField fullWidth label="Your Email" margin="dense" />
              <TextField
                fullWidth
                label="Your Message"
                multiline
                rows={3}
                margin="dense"
              />
              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  bgcolor: "#ffca28",
                  color: "#000",
                  fontWeight: "bold",
                  "&:hover": { bgcolor: "#ffb300" },
                }}
              >
                Send Message
              </Button>
            </Box>

            {/* Buying Contact */}
            <Box
              sx={{
                bgcolor: "#fff",
                p: 3,
                borderRadius: 3,
                boxShadow: 2,
              }}
            >
              <Typography variant="h6" fontWeight="bold" mb={2}>
                For Buying Contact
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  sx={{ width: 50, height: 50, mr: 2 }}
                />
                <Box>
                  <Typography fontWeight="bold">Prime Solutions</Typography>
                  <Chip label="Agency" color="success" size="small" />
                  <Typography variant="body2" color="text.secondary">
                    Agency Office
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <PhoneIcon sx={{ color: "green", mr: 1 }} /> 0123456789
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <EmailIcon sx={{ color: "green", mr: 1 }} /> contact@primesolutions.com
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <Button variant="outlined" fullWidth>
                  Send Email
                </Button>
                <Button variant="outlined" fullWidth>
                  Call Now
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}









