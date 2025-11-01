import React from "react";
import { Box } from "@mui/material";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#fff" }}>
      <SideBar />
      <Box sx={{ flex: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
