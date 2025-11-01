import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Rating,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { products } from "./Products";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import GarageIcon from "@mui/icons-material/Garage";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <Typography>Property not found</Typography>;

  return (
    <Box sx={{ backgroundColor: "#F7F5F2", py: 6 }}>
      <Grid container spacing={4} sx={{ maxWidth: 1200, mx: "auto" }}>
        {/* Left Section */}
        <Grid item xs={12} md={8}>
          <Box
            component="img"
            src={product.image}
            alt={product.title}
            sx={{
              width: "100%",
              borderRadius: 3,
              mb: 3,
            }}
          />

          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#2E2D2B", mb: 1 }}
          >
            {product.title}
          </Typography>

          <Typography sx={{ color: "#E3B300", fontWeight: "bold", mb: 1 }}>
            {product.type}
          </Typography>

          <Typography sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <LocationOnIcon sx={{ mr: 1, color: "gray" }} /> 789 Park Lane,
            NewYork, USA
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
              ${product.price} | ${product.nightPrice}/night
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Rating value={5} readOnly precision={0.5} />
              <Typography sx={{ ml: 1, fontWeight: "bold" }}>5.0</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <BedIcon /> {product.beds}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <BathtubIcon /> {product.baths}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <GarageIcon /> {product.garages}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <SquareFootIcon /> {product.area} sq ft
            </Box>
          </Box>

          <Typography sx={{ color: "gray", mb: 3 }}>
            {product.description}
          </Typography>
        </Grid>

        {/* Right Section - Contact Form */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              bgcolor: "#fff",
              p: 3,
              borderRadius: 3,
              boxShadow: 2,
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
                bgcolor: "#E3B300",
                color: "#000",
                fontWeight: "bold",
                "&:hover": { bgcolor: "#d2a700" },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
