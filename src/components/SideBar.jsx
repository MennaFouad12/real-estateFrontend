
// import React from "react";
// import {
//   Box,
//   Typography,

// } from "@mui/material";

// import DashboardIcon from "@mui/icons-material/Dashboard";
// import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
// import ViewListIcon from "@mui/icons-material/ViewList";
// export default function SideBar() {
//   return (
//       <Box
//         sx={{
//           width: 250,
//           bgcolor: "#fff",
//           borderRight: "1px solid #f0f0f0",
//           p: 3,
//         }}
//       >
//         <Typography
//           variant="h5"
//           sx={{ fontWeight: "bold", mb: 4, color: "#000" }}
//         >
//           N<span style={{ color: "#E3B300" }}>estorria.</span>
//         </Typography>

//         {[
//           { icon: <DashboardIcon />, label: "Dashboard" },
//           { icon: <AddHomeWorkIcon />, label: "Add Property" },
//           { icon: <ViewListIcon />, label: "List Property" },
//         ].map((item, index) => (
//           <Box
//             key={index}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               p: 1.2,
//               mb: 1.5,
//               borderRadius: 2,
//               bgcolor: item.label === "Dashboard" ? "#fff8e1" : "transparent",
//               color: item.label === "Dashboard" ? "#E3B300" : "#555",
//               fontWeight: 500,
//               cursor: "pointer",
//               "&:hover": { bgcolor: "#fff8e1" },
//             }}
//           >
//             <Box sx={{ mr: 1.5 }}>{item.icon}</Box>
//             {item.label}
//           </Box>
//         ))}
//       </Box>
//   )
// }



import React from "react";
import { Box, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useNavigate, useLocation } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { icon: <DashboardIcon />, label: "Dashboard", path: "/dashboard" },
    { icon: <AddHomeWorkIcon />, label: "Add Property", path: "/dashboard/add-property" },
    { icon: <ViewListIcon />, label: "List Property", path: "/dashboard/list-property" },
  ];

  return (
    <Box
      sx={{
        width: 250,
        bgcolor: "#fff",
        borderRight: "1px solid #f0f0f0",
        p: 3,
        height: "100vh"
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", mb: 4, color: "#000" }}
      >
        N<span style={{ color: "#E3B300" }}>estorria.</span>
      </Typography>

      {menu.map((item, index) => {
        const isActive = location.pathname === item.path;
        return (
          <Box
            key={index}
            onClick={() => navigate(item.path)}
            sx={{
              display: "flex",
              alignItems: "center",
              p: 1.2,
              mb: 1.5,
              borderRadius: 2,
              bgcolor: isActive ? "#fff8e1" : "transparent",
              color: isActive ? "#E3B300" : "#555",
              fontWeight: 500,
              cursor: "pointer",
              "&:hover": { bgcolor: "#fff8e1" },
            }}
          >
            <Box sx={{ mr: 1.5 }}>{item.icon}</Box>
            {item.label}
          </Box>
        );
      })}
    </Box>
  );
}
