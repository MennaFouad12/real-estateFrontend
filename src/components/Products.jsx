




import { Box, Container, IconButton, Typography, Grid } from '@mui/material'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import React from 'react'
import ProductCard from './ProductCard';
import { fetchProperties } from '../api/property';
import { useQuery } from '@tanstack/react-query';

export const products = [
  {
    id: 1,
    type: "Villa",
    price: 77000,
    nightPrice: 399,
    title: "Urban Elegance Sophistication",
    beds: 3,
    baths: 2,
    garages: 1,
    area: 299,
    description: "This villa is a stunning masterpiece of luxury and art...",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100"
  },
  {
    id: 2,
    type: "Villa",
    price: 77000,
    nightPrice: 399,
    title: "Urban Elegance Sophistication",
    beds: 3,
    baths: 2,
    garages: 1,
    area: 299,
    description: "This villa is a stunning masterpiece of luxury and art...",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100"
  },
  {
    id: 3,
    type: "Villa",
    price: 77000,
    nightPrice: 399,
    title: "Urban Elegance Sophistication",
    beds: 3,
    baths: 2,
    garages: 1,
    area: 299,
    description: "This villa is a stunning masterpiece of luxury and art...",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100"
  }
];

export default function Products() {

   const { data: properties, isLoading, isError, error } = useQuery({
  queryKey: ['properties'],
  queryFn: fetchProperties,
})
   if(properties) console.log(properties);
  return (
    <Box sx={{ backgroundColor: "#E5E3DD", py: { xs: 6, md: 10 } }}>
      <Container>

        {/* TEXT HEADER */}
        <Typography sx={{ fontWeight: "bold", color: "grey" }}>
          Your New Home Awaits!
        </Typography>

        <Typography
          variant="h3"
          sx={{
            color: "#2E2D2B",
            fontWeight: "bold",
            fontSize: { xs: "28px", md: "40px" },
            mb: 2
          }}
        >
          Discover Your Place Here
        </Typography>

        {/* TOP BAR */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            mb: 3
          }}
        >
          <Typography>
            <span style={{ color: "#2E2D2B", fontWeight: "500" }}>
              Displaying 1–9
            </span>{" "}
            from 3k listings
          </Typography>

          <IconButton
            aria-label="filter"
            disabled
            sx={{
              backgroundColor: "#ffeca7ff",
              border: "1px solid grey",
              borderRadius: "10px"
            }}
          >
            <FormatAlignJustifyIcon />
          </IconButton>
        </Box>

        {/* RESPONSIVE CARDS GRID */}
        <Grid container spacing={3}>
          {properties?.data.map((property) => (
            <Grid item xs={12} sm={6} md={4} key={property._id}>
              <ProductCard property={property} />
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}
