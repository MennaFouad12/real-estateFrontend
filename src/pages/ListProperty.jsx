import React from 'react'

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
export default function ListProperty() {
  const properties = [
  {
    id: 1,
    property: "Oceanview Oasis Serenity Escape",
    dates: "8/28/2025 to 8/30/2025",
    address:"Lagos, Nigeria",
    amount: "$398",
    status: "Completed",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100",
  },
  ]
  return (
      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
          <Table>
            <TableHead sx={{ bgcolor: "#fdd835" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Index</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Property</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Address</TableCell>
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
                  <TableCell>{row.address}</TableCell>
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
  )
}
