// import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
// import BedIcon from '@mui/icons-material/Bed';
// import BathtubIcon from '@mui/icons-material/Bathtub';
// import GarageIcon from '@mui/icons-material/Garage';
// import SquareFootIcon from '@mui/icons-material/SquareFoot';

// import React from 'react'

// export default function ProductCard({ product }) {
//   return (
//     <Card sx={{ maxWidth: 320 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image={product.image}
//           alt="green iguana"
//         />
//         <CardContent>
//           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//             <Typography gutterBottom variant="h5" component="div">
//               {product.type}
//             </Typography>
//             <Typography sx={{color:"#E3B300",fontWeight:"bold"}}>${product.price} | ${product.nightPrice} <sub>/night</sub></Typography>
//           </Box>
//           <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//             {product.title}
//           </Typography>
//           <Box sx={{ display: 'flex', gap:4, color: "grey", fontWeight: "bold",mt:"10px" }}>
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
//               <BedIcon fontSize="medium" /> {product.beds} |
//             </Box>
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
//               <BathtubIcon fontSize="medium" /> {product.baths} |
//             </Box>
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
//               <GarageIcon fontSize="medium" /> {product.garages} |
//             </Box>
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
//               <SquareFootIcon fontSize="medium" /> {product.area}
//             </Box>
//           </Box>
//           <Typography sx={{color:"grey",mt:"10px"}}>{product.description}</Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   )
// }









import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import GarageIcon from "@mui/icons-material/Garage";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ property }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: 300,
        height: 400,
        borderRadius: 3,
        boxShadow: 3,
        transition: "transform 0.3s",
        "&:hover": { transform: "translateY(-5px)" },
      }}
      onClick={() => navigate(`/listings/${property._id}`)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={property.images[0].url}
          alt={property.propertyName}
          sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
        />

        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="subtitle1" fontWeight="bold">
              {property.propertyType}
            </Typography>
            <Typography sx={{ color: "#E3B300", fontWeight: "bold" }}>
              ${property.rentPrice} | ${property.rentPrice}
              <sub>/night</sub>
            </Typography>
          </Box>

          <Typography variant="h6" sx={{ fontWeight: "bold", mt: 0.5 }}>
            {property.propertyName}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              color: "grey",
              fontWeight: "bold",
              mt: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <BedIcon fontSize="small" /> {property.bedrooms}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <BathtubIcon fontSize="small" /> {property.bathrooms}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <GarageIcon fontSize="small" /> 3
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <SquareFootIcon fontSize="small" /> {property.area}
            </Box>
          </Box>

          <Typography sx={{ color: "grey", mt: 1 }}>
            {property.propertyDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
