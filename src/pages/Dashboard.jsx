import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import ViewListIcon from "@mui/icons-material/ViewList";
import SideBar from "../components/SideBar";

const properties = [
  {
    id: 1,
    property: "Oceanview Oasis Serenity Escape",
    dates: "8/28/2025 to 8/30/2025",
    amount: "$398",
    status: "Completed",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100",
  },
  {
    id: 2,
    property: "Urban Elegance Sophistication Haven",
    dates: "8/17/2025 to 8/18/2025",
    amount: "$399",
    status: "Completed",
    img: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=100",
  },
  {
    id: 3,
    property: "Urban Elegance Sophistication Haven",
    dates: "8/15/2025 to 8/16/2025",
    amount: "$399",
    status: "Pending",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=100",
  },
  {
    id: 4,
    property: "Mountain Majesty Tranquility Haven",
    dates: "8/15/2025 to 8/16/2025",
    amount: "$199",
    status: "Pending",
    img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=100",
  },
  {
    id: 5,
    property: "Oceanview Oasis Serenity Escape",
    dates: "8/17/2025 to 8/18/2025",
    amount: "$199",
    status: "Pending",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100",
  },
  {
    id: 6,
    property: "Oceanview Oasis Serenity Escape",
    dates: "8/15/2025 to 8/16/2025",
    amount: "$199",
    status: "Pending",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100",
  },
];

export default function Dashboard() {
  return (
    <Box >






      {/* Main Content */}
      <Box sx={{ flex: 1, p: 4, bgcolor: "#fff" }}>
        {/* Stats Cards */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#fff3cd", borderRadius: 3 }}>
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <HomeOutlinedIcon sx={{ fontSize: 40, mr: 2, color: "#000" }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    06
                  </Typography>
                  <Typography variant="body2">Total Sales</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#e3f2fd", borderRadius: 3 }}>
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <AttachMoneyIcon sx={{ fontSize: 40, mr: 2, color: "#000" }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    $797
                  </Typography>
                  <Typography variant="body2">Total Earnings</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Table */}
        <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
          <Table>
            <TableHead sx={{ bgcolor: "#fdd835" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Index</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Property</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Booking dates</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Amount</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {properties.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        src={row.img}
                        alt={row.property}
                        sx={{ width: 40, height: 40, mr: 1 }}
                      />
                      {row.property}
                    </Box>
                  </TableCell>
                  <TableCell>{row.dates}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        bgcolor:
                          row.status === "Completed"
                            ? "#c8e6c9"
                            : "#fff9c4",
                        color:
                          row.status === "Completed"
                            ? "#2e7d32"
                            : "#ff8f00",
                        px: 2,
                        py: 0.5,
                        borderRadius: 3,
                        fontSize: 13,
                        textAlign: "center",
                        width: "fit-content",
                      }}
                    >
                      {row.status}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

// export default Dashboard;