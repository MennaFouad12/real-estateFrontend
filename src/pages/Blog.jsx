import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'
const blogs=[
  {
      id: 1,
  sectionTitle: "Market Trends",
  headline: "Top 10 Cities to Buy Property in 2025",
  description: "Discover the most promising cities for real estate investment and future growth in 2025.",
},
{
    id: 2,
  sectionTitle: "Market Trends",
  headline: "Top 10 Cities to Buy Property in 2025",
  description: "Discover the most promising cities for real estate investment and future growth in 2025.",
}]
export default function Blog() {
  return (
  <Box sx={{backgroundColor:"#FFFBEF"}}>
    <Container>
  <Grid container spacing={3}>
          {blogs.map((blog) => ( 
            <Grid item xs={12} sm={6} md={4} key={blog.id}>
               <Card sx={{ maxWidth: 345 ,backgroundColor:"#FFFBEF",border:"none",boxShadow:"none",borderRadius:"10px"}}>
      <CardActionArea>
        <Box sx={{display:"flex",justifyContent:"center",backgroundColor:"#FEF6DA",borderRadius:"10px"}}>
        <CardMedia
          component="img"
          sx={{padding:"10px",borderRadius:"20px"}}
          height="140"
          image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100"
          alt="green iguana"
        />
        </Box>
        <CardContent>
            <Typography  component="div" sx={{ color: 'text.secondary' }}>
            {blog.sectionTitle}
          </Typography>
          <Typography gutterBottom variant="h6" sx={{fontWeight:"bold"}} component="div">
            {blog.headline}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {blog.description}
          </Typography>
          <Link href="#" color="inherit">
  Read More
</Link>
        </CardContent>
      </CardActionArea>
    </Card>
            </Grid>
          ))}
        </Grid>
    </Container>
  </Box>
  )
}
