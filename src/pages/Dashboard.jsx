// import React from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   Grid,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Avatar,
// } from "@mui/material";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
// import ViewListIcon from "@mui/icons-material/ViewList";
// import SideBar from "../components/SideBar";

// const properties = [
//   {
//     id: 1,
//     property: "Oceanview Oasis Serenity Escape",
//     dates: "8/28/2025 to 8/30/2025",
//     amount: "$398",
//     status: "Completed",
//     img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100",
//   },
//   {
//     id: 2,
//     property: "Urban Elegance Sophistication Haven",
//     dates: "8/17/2025 to 8/18/2025",
//     amount: "$399",
//     status: "Completed",
//     img: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=100",
//   },
//   {
//     id: 3,
//     property: "Urban Elegance Sophistication Haven",
//     dates: "8/15/2025 to 8/16/2025",
//     amount: "$399",
//     status: "Pending",
//     img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=100",
//   },
//   {
//     id: 4,
//     property: "Mountain Majesty Tranquility Haven",
//     dates: "8/15/2025 to 8/16/2025",
//     amount: "$199",
//     status: "Pending",
//     img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=100",
//   },
//   {
//     id: 5,
//     property: "Oceanview Oasis Serenity Escape",
//     dates: "8/17/2025 to 8/18/2025",
//     amount: "$199",
//     status: "Pending",
//     img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100",
//   },
//   {
//     id: 6,
//     property: "Oceanview Oasis Serenity Escape",
//     dates: "8/15/2025 to 8/16/2025",
//     amount: "$199",
//     status: "Pending",
//     img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100",
//   },
// ];

// export default function Dashboard() {
//   return (
//     <Box >






//       {/* Main Content */}
//       <Box sx={{ flex: 1, p: 4, bgcolor: "#fff" }}>
//         {/* Stats Cards */}
//         <Grid container spacing={2} sx={{ mb: 3 }}>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ bgcolor: "#fff3cd", borderRadius: 3 }}>
//               <CardContent sx={{ display: "flex", alignItems: "center" }}>
//                 <HomeOutlinedIcon sx={{ fontSize: 40, mr: 2, color: "#000" }} />
//                 <Box>
//                   <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//                     06
//                   </Typography>
//                   <Typography variant="body2">Total Sales</Typography>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>

//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ bgcolor: "#e3f2fd", borderRadius: 3 }}>
//               <CardContent sx={{ display: "flex", alignItems: "center" }}>
//                 <AttachMoneyIcon sx={{ fontSize: 40, mr: 2, color: "#000" }} />
//                 <Box>
//                   <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//                     $797
//                   </Typography>
//                   <Typography variant="body2">Total Earnings</Typography>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>

//         {/* Table */}
//         <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
//           <Table>
//             <TableHead sx={{ bgcolor: "#fdd835" }}>
//               <TableRow>
//                 <TableCell sx={{ fontWeight: "bold" }}>Index</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Property</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Booking dates</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Amount</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {properties.map((row) => (
//                 <TableRow key={row.id}>
//                   <TableCell>{row.id}</TableCell>
//                   <TableCell>
//                     <Box sx={{ display: "flex", alignItems: "center" }}>
//                       <Avatar
//                         src={row.img}
//                         alt={row.property}
//                         sx={{ width: 40, height: 40, mr: 1 }}
//                       />
//                       {row.property}
//                     </Box>
//                   </TableCell>
//                   <TableCell>{row.dates}</TableCell>
//                   <TableCell>{row.amount}</TableCell>
//                   <TableCell>
//                     <Box
//                       sx={{
//                         bgcolor:
//                           row.status === "Completed"
//                             ? "#c8e6c9"
//                             : "#fff9c4",
//                         color:
//                           row.status === "Completed"
//                             ? "#2e7d32"
//                             : "#ff8f00",
//                         px: 2,
//                         py: 0.5,
//                         borderRadius: 3,
//                         fontSize: 13,
//                         textAlign: "center",
//                         width: "fit-content",
//                       }}
//                     >
//                       {row.status}
//                     </Box>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>
//     </Box>
//   );
// }

// // export default Dashboard;









// import React from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   Grid,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Avatar,
//   Chip,
//   LinearProgress,
//   useTheme,
//   useMediaQuery,
//   IconButton,
//   Tooltip,
// } from "@mui/material";
// import {
//   HomeOutlined,
//   AttachMoney,
//   TrendingUp,
//   Notifications,
//   Search,
//   FilterList,
//   Download,
//   CalendarToday,
// } from "@mui/icons-material";

// const properties = [
//   {
//     id: 1,
//     property: "Oceanview Oasis Serenity Escape",
//     dates: "8/28/2025 to 8/30/2025",
//     amount: "$398",
//     status: "Completed",
//     img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100",
//     nights: 2,
//     guests: 4,
//   },
//   {
//     id: 2,
//     property: "Urban Elegance Sophistication Haven",
//     dates: "8/17/2025 to 8/18/2025",
//     amount: "$399",
//     status: "Completed",
//     img: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=100",
//     nights: 1,
//     guests: 2,
//   },
//   {
//     id: 3,
//     property: "Urban Elegance Sophistication Haven",
//     dates: "8/15/2025 to 8/16/2025",
//     amount: "$399",
//     status: "Pending",
//     img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=100",
//     nights: 1,
//     guests: 3,
//   },
//   {
//     id: 4,
//     property: "Mountain Majesty Tranquility Haven",
//     dates: "8/15/2025 to 8/16/2025",
//     amount: "$199",
//     status: "Pending",
//     img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=100",
//     nights: 1,
//     guests: 2,
//   },
//   {
//     id: 5,
//     property: "Oceanview Oasis Serenity Escape",
//     dates: "8/17/2025 to 8/18/2025",
//     amount: "$199",
//     status: "Pending",
//     img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100",
//     nights: 1,
//     guests: 4,
//   },
//   {
//     id: 6,
//     property: "Oceanview Oasis Serenity Escape",
//     dates: "8/15/2025 to 8/16/2025",
//     amount: "$199",
//     status: "Pending",
//     img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100",
//     nights: 1,
//     guests: 2,
//   },
// ];

// const stats = [
//   {
//     title: "Total Bookings",
//     value: "06",
//     icon: <HomeOutlined sx={{ fontSize: 28 }} />,
//     color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//     trend: "+12%",
//   },
//   {
//     title: "Total Earnings",
//     value: "$1,793",
//     icon: <AttachMoney sx={{ fontSize: 28 }} />,
//     color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
//     trend: "+8%",
//   },
//   {
//     title: "Occupancy Rate",
//     value: "78%",
//     icon: <TrendingUp sx={{ fontSize: 28 }} />,
//     color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
//     trend: "+5%",
//   },
//   {
//     title: "Pending Bookings",
//     value: "04",
//     icon: <CalendarToday sx={{ fontSize: 28 }} />,
//     color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
//     trend: "+2",
//   },
// ];

// export default function Dashboard() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   const StatusChip = ({ status }) => {
//     const statusConfig = {
//       Completed: { color: "#4caf50", bgcolor: "#e8f5e8" },
//       Pending: { color: "#ff9800", bgcolor: "#fff3e0" },
//       Cancelled: { color: "#f44336", bgcolor: "#ffebee" },
//     };

//     const config = statusConfig[status] || statusConfig.Pending;

//     return (
//       <Chip
//         label={status}
//         size="small"
//         sx={{
//           bgcolor: config.bgcolor,
//           color: config.color,
//           fontWeight: 600,
//           borderRadius: 2,
//           minWidth: 100,
//         }}
//       />
//     );
//   };

//   return (
//     <Box sx={{ flex: 1, p: { xs: 2, md: 4 }, bgcolor: "#f8fafc" }}>
//       {/* Header */}
//       <Box sx={{ mb: 4 }}>
//         <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
//           <Typography variant="h4" sx={{ fontWeight: "bold", color: "#1a237e" }}>
//             Dashboard Overview
//           </Typography>
//           <Box sx={{ display: "flex", gap: 1 }}>
//             <Tooltip title="Search">
//               <IconButton sx={{ bgcolor: "white", boxShadow: 1 }}>
//                 <Search />
//               </IconButton>
//             </Tooltip>
//             <Tooltip title="Filter">
//               <IconButton sx={{ bgcolor: "white", boxShadow: 1 }}>
//                 <FilterList />
//               </IconButton>
//             </Tooltip>
//             <Tooltip title="Download Report">
//               <IconButton sx={{ bgcolor: "white", boxShadow: 1 }}>
//                 <Download />
//               </IconButton>
//             </Tooltip>
//           </Box>
//         </Box>
//         <Typography variant="body1" sx={{ color: "text.secondary" }}>
//           Welcome back! Here's what's happening with your properties today.
//         </Typography>
//       </Box>

//       {/* Stats Cards */}
//       <Grid container spacing={3} sx={{ mb: 4 }}>
//         {stats.map((stat, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Card 
//               sx={{ 
//                 borderRadius: 3,
//                 boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
//                 background: stat.color,
//                 color: "white",
//                 position: "relative",
//                 overflow: "hidden",
//                 "&:before": {
//                   content: '""',
//                   position: "absolute",
//                   top: 0,
//                   right: 0,
//                   width: 80,
//                   height: 80,
//                   background: "rgba(255,255,255,0.1)",
//                   borderRadius: "50%",
//                   transform: "translate(20px, -20px)",
//                 }
//               }}
//             >
//               <CardContent sx={{ p: 3, position: "relative" }}>
//                 <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
//                   <Box>
//                     <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
//                       {stat.value}
//                     </Typography>
//                     <Typography variant="body2" sx={{ opacity: 0.9 }}>
//                       {stat.title}
//                     </Typography>
//                     <Chip 
//                       label={stat.trend} 
//                       size="small" 
//                       sx={{ 
//                         bgcolor: "rgba(255,255,255,0.2)", 
//                         color: "white", 
//                         mt: 1,
//                         fontSize: "0.75rem"
//                       }} 
//                     />
//                   </Box>
//                   <Box sx={{ 
//                     bgcolor: "rgba(255,255,255,0.2)", 
//                     p: 1, 
//                     borderRadius: 2,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center"
//                   }}>
//                     {stat.icon}
//                   </Box>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Performance Section */}
//       <Grid container spacing={3} sx={{ mb: 4 }}>
//         <Grid item xs={12} md={8}>
//           <Card sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
//             <CardContent sx={{ p: 3 }}>
//               <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
//                 <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//                   Recent Bookings
//                 </Typography>
//                 <Chip label="6 bookings" variant="outlined" />
//               </Box>
              
//               <TableContainer>
//                 <Table>
//                   <TableHead sx={{ bgcolor: "transparent" }}>
//                     <TableRow>
//                       <TableCell sx={{ fontWeight: "bold", color: "text.secondary" }}>#</TableCell>
//                       <TableCell sx={{ fontWeight: "bold", color: "text.secondary" }}>Property</TableCell>
//                       {!isMobile && (
//                         <TableCell sx={{ fontWeight: "bold", color: "text.secondary" }}>Dates</TableCell>
//                       )}
//                       <TableCell sx={{ fontWeight: "bold", color: "text.secondary" }}>Amount</TableCell>
//                       <TableCell sx={{ fontWeight: "bold", color: "text.secondary" }}>Status</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {properties.map((row) => (
//                       <TableRow 
//                         key={row.id}
//                         sx={{ 
//                           '&:hover': { 
//                             bgcolor: 'action.hover',
//                             cursor: 'pointer'
//                           },
//                           transition: 'all 0.2s'
//                         }}
//                       >
//                         <TableCell>
//                           <Typography variant="body2" sx={{ fontWeight: "medium" }}>
//                             {row.id}
//                           </Typography>
//                         </TableCell>
//                         <TableCell>
//                           <Box sx={{ display: "flex", alignItems: "center" }}>
//                             <Avatar
//                               src={row.img}
//                               alt={row.property}
//                               sx={{ 
//                                 width: 40, 
//                                 height: 40, 
//                                 mr: 2,
//                                 boxShadow: 1
//                               }}
//                             />
//                             <Box>
//                               <Typography variant="body2" sx={{ fontWeight: "medium" }}>
//                                 {isMobile ? row.property.split(' ')[0] + '...' : row.property}
//                               </Typography>
//                               {!isMobile && (
//                                 <Typography variant="caption" sx={{ color: "text.secondary" }}>
//                                   {row.nights} nights • {row.guests} guests
//                                 </Typography>
//                               )}
//                             </Box>
//                           </Box>
//                         </TableCell>
//                         {!isMobile && (
//                           <TableCell>
//                             <Typography variant="body2">
//                               {row.dates}
//                             </Typography>
//                           </TableCell>
//                         )}
//                         <TableCell>
//                           <Typography variant="body2" sx={{ fontWeight: "bold", color: "#2e7d32" }}>
//                             {row.amount}
//                           </Typography>
//                         </TableCell>
//                         <TableCell>
//                           <StatusChip status={row.status} />
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Quick Stats Sidebar */}
//         <Grid item xs={12} md={4}>
//           <Card sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.08)", mb: 3 }}>
//             <CardContent sx={{ p: 3 }}>
//               <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
//                 Booking Status
//               </Typography>
//               <Box sx={{ mb: 3 }}>
//                 <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
//                   <Typography variant="body2">Completed</Typography>
//                   <Typography variant="body2" sx={{ fontWeight: "bold" }}>33%</Typography>
//                 </Box>
//                 <LinearProgress 
//                   variant="determinate" 
//                   value={33} 
//                   sx={{ 
//                     height: 8, 
//                     borderRadius: 4,
//                     bgcolor: '#e0e0e0',
//                     '& .MuiLinearProgress-bar': {
//                       bgcolor: '#4caf50',
//                       borderRadius: 4,
//                     }
//                   }}
//                 />
//               </Box>
//               <Box sx={{ mb: 3 }}>
//                 <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
//                   <Typography variant="body2">Pending</Typography>
//                   <Typography variant="body2" sx={{ fontWeight: "bold" }}>67%</Typography>
//                 </Box>
//                 <LinearProgress 
//                   variant="determinate" 
//                   value={67} 
//                   sx={{ 
//                     height: 8, 
//                     borderRadius: 4,
//                     bgcolor: '#e0e0e0',
//                     '& .MuiLinearProgress-bar': {
//                       bgcolor: '#ff9800',
//                       borderRadius: 4,
//                     }
//                   }}
//                 />
//               </Box>
//             </CardContent>
//           </Card>

//           <Card sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
//             <CardContent sx={{ p: 3 }}>
//               <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
//                 Quick Actions
//               </Typography>
//               <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//                 {['Add New Property', 'View Calendar', 'Generate Report', 'Manage Listings'].map((action, index) => (
//                   <Box
//                     key={index}
//                     sx={{
//                       p: 2,
//                       bgcolor: 'action.hover',
//                       borderRadius: 2,
//                       textAlign: 'center',
//                       cursor: 'pointer',
//                       transition: 'all 0.2s',
//                       '&:hover': {
//                         bgcolor: 'primary.main',
//                         color: 'white',
//                         transform: 'translateY(-2px)',
//                         boxShadow: 2
//                       }
//                     }}
//                   >
//                     <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
//                       {action}
//                     </Typography>
//                   </Box>
//                 ))}
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }










import React, { use, useEffect } from "react";
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
  Chip,
  LinearProgress,
  useTheme,
  useMediaQuery,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  HomeOutlined,
  AttachMoney,
  TrendingUp,
  Notifications,
  Search,
  FilterList,
  Download,
  CalendarToday,
} from "@mui/icons-material";
import { getAllBookings } from "../api/booking";
import { useQuery } from "@tanstack/react-query";

const properties = [
  {
    id: 1,
    property: "Oceanview Oasis Serenity Escape",
    dates: "8/28/2025 to 8/30/2025",
    amount: "$398",
    status: "Completed",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100",
    nights: 2,
    guests: 4,
  },
  {
    id: 2,
    property: "Urban Elegance Sophistication Haven",
    dates: "8/17/2025 to 8/18/2025",
    amount: "$399",
    status: "Completed",
    img: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=100",
    nights: 1,
    guests: 2,
  },
  {
    id: 3,
    property: "Urban Elegance Sophistication Haven",
    dates: "8/15/2025 to 8/16/2025",
    amount: "$399",
    status: "Pending",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=100",
    nights: 1,
    guests: 3,
  },
  {
    id: 4,
    property: "Mountain Majesty Tranquility Haven",
    dates: "8/15/2025 to 8/16/2025",
    amount: "$199",
    status: "Pending",
    img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=100",
    nights: 1,
    guests: 2,
  },
  {
    id: 5,
    property: "Oceanview Oasis Serenity Escape",
    dates: "8/17/2025 to 8/18/2025",
    amount: "$199",
    status: "Pending",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100",
    nights: 1,
    guests: 4,
  },
  {
    id: 6,
    property: "Oceanview Oasis Serenity Escape",
    dates: "8/15/2025 to 8/16/2025",
    amount: "$199",
    status: "Pending",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100",
    nights: 1,
    guests: 2,
  },
];

const stats = [
  {
    title: "Total Bookings",
    value: "06",
    icon: <HomeOutlined sx={{ fontSize: 28 }} />,
    color: "linear-gradient(135deg, #E3B300 0%, #F4C430 100%)",
    trend: "+12%",
  },
  {
    title: "Total Earnings",
    value: "$1,793",
    icon: <AttachMoney sx={{ fontSize: 28 }} />,
    color: "linear-gradient(135deg, #E3B300 0%, #FFD700 100%)",
    trend: "+8%",
  },
  {
    title: "Occupancy Rate",
    value: "78%",
    icon: <TrendingUp sx={{ fontSize: 28 }} />,
    color: "linear-gradient(135deg, #E3B300 0%, #FFDF00 100%)",
    trend: "+5%",
  },
  {
    title: "Pending Bookings",
    value: "04",
    icon: <CalendarToday sx={{ fontSize: 28 }} />,
    color: "linear-gradient(135deg, #E3B300 0%, #F0E68C 100%)",
    trend: "+2",
  },
];

export default function Dashboard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));


  const { data: booking, isLoading, isError, error } = useQuery({
  queryKey: ['bookings'],
  queryFn:getAllBookings ,
})

  const StatusChip = ({ status }) => {
    const statusConfig = {
      Completed: { color: "#4caf50", bgcolor: "#e8f5e8" },
      Pending: { color: "#E3B300", bgcolor: "#fff8e1" },
      Cancelled: { color: "#f44336", bgcolor: "#ffebee" },
    };

    const config = statusConfig[status] || statusConfig.Pending;
useEffect(() => {
  console.log(booking);
},[booking])
    return (
      <Chip
        label={status}
        size="small"
        sx={{
          bgcolor: config.bgcolor,
          color: config.color,
          fontWeight: 600,
          borderRadius: 2,
          minWidth: 100,
        }}
      />
    );
  };

  return (
    <Box sx={{ flex: 1, p: { xs: 2, md: 4 }, bgcolor: "#fafafa" }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#E3B300" }}>
            Dashboard Overview
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Tooltip title="Search">
              <IconButton sx={{ bgcolor: "white", boxShadow: 1, '&:hover': { bgcolor: '#fff8e1' } }}>
                <Search sx={{ color: "#E3B300" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Filter">
              <IconButton sx={{ bgcolor: "white", boxShadow: 1, '&:hover': { bgcolor: '#fff8e1' } }}>
                <FilterList sx={{ color: "#E3B300" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Download Report">
              <IconButton sx={{ bgcolor: "white", boxShadow: 1, '&:hover': { bgcolor: '#fff8e1' } }}>
                <Download sx={{ color: "#E3B300" }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Welcome back! Here's what's happening with your properties today.
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card 
              sx={{ 
                borderRadius: 3,
                boxShadow: "0 4px 20px rgba(227, 179, 0, 0.15)",
                background: stat.color,
                color: "white",
                position: "relative",
                overflow: "hidden",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 80,
                  height: 80,
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: "50%",
                  transform: "translate(20px, -20px)",
                }
              }}
            >
              <CardContent sx={{ p: 3, position: "relative" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {stat.title}
                    </Typography>
                    <Chip 
                      label={stat.trend} 
                      size="small" 
                      sx={{ 
                        bgcolor: "rgba(255,255,255,0.3)", 
                        color: "white", 
                        mt: 1,
                        fontSize: "0.75rem",
                        fontWeight: "bold"
                      }} 
                    />
                  </Box>
                  <Box sx={{ 
                    bgcolor: "rgba(255,255,255,0.3)", 
                    p: 1, 
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    {stat.icon}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Performance Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={8}>
          <Card sx={{ 
            borderRadius: 3, 
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            border: "1px solid #fff8e1"
          }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                mb: 3,
                pb: 2,
                borderBottom: "2px solid #fff8e1"
              }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#E3B300" }}>
                  Recent Bookings
                </Typography>
                <Chip 
                  label="6 bookings" 
                  variant="outlined" 
                  sx={{ 
                    borderColor: "#E3B300", 
                    color: "#E3B300",
                    fontWeight: "bold"
                  }} 
                />
              </Box>
              
              <TableContainer>
                <Table>
                  <TableHead sx={{ bgcolor: "#fff8e1" }}>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold", color: "#E3B300" }}>#</TableCell>
                      <TableCell sx={{ fontWeight: "bold", color: "#E3B300" }}>Property</TableCell>
                      {!isMobile && (
                        <TableCell sx={{ fontWeight: "bold", color: "#E3B300" }}>Dates</TableCell>
                      )}
                      <TableCell sx={{ fontWeight: "bold", color: "#E3B300" }}>Amount</TableCell>
                      <TableCell sx={{ fontWeight: "bold", color: "#E3B300" }}>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {booking?.data.map((row, index) => (
                      <TableRow 
                        key={index}
                        sx={{ 
                          '&:hover': { 
                            bgcolor: '#fff8e1',
                            cursor: 'pointer'
                          },
                          transition: 'all 0.2s'
                        }}
                      >
                        <TableCell>
                          <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                            {index + 1}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            {/* <Avatar
                              src={row.img}
                              alt={row.property}
                              sx={{ 
                                width: 40, 
                                height: 40, 
                                mr: 2,
                                boxShadow: 1,
                                border: "2px solid #fff8e1"
                              }}
                            /> */}
                            <Box>
                              <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                                {isMobile ? row.propertyName.split(' ')[0] + '...' : row.propertyName}
                              </Typography>
                              {!isMobile && (
                                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                                  {row.nights} nights • {row.booking.guestsCount} guests
                                </Typography>
                              )}
                            </Box>
                          </Box>
                        </TableCell>
                        {!isMobile && (
                          <TableCell>
                            <Typography variant="body2">
                            {new Date(row.booking.startDate).toLocaleDateString()} - {new Date(row.booking.endDate).toLocaleDateString()}

                            </Typography>
                          </TableCell>
                        )}
                        <TableCell>
                          <Typography variant="body2" sx={{ fontWeight: "bold", color: "#E3B300" }}>
                            {row.booking.totalAmount}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <StatusChip status={row.booking.status} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Quick Stats Sidebar */}
        <Grid item xs={12} md={4}>
          <Card sx={{ 
            borderRadius: 3, 
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)", 
            mb: 3,
            border: "1px solid #fff8e1"
          }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3, color: "#E3B300" }}>
                Booking Status
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography variant="body2">Completed</Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold", color: "#E3B300" }}>33%</Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={33} 
                  sx={{ 
                    height: 8, 
                    borderRadius: 4,
                    bgcolor: '#fff8e1',
                    '& .MuiLinearProgress-bar': {
                      bgcolor: '#4caf50',
                      borderRadius: 4,
                    }
                  }}
                />
              </Box>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography variant="body2">Pending</Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold", color: "#E3B300" }}>67%</Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={67} 
                  sx={{ 
                    height: 8, 
                    borderRadius: 4,
                    bgcolor: '#fff8e1',
                    '& .MuiLinearProgress-bar': {
                      bgcolor: '#E3B300',
                      borderRadius: 4,
                    }
                  }}
                />
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ 
            borderRadius: 3, 
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            border: "1px solid #fff8e1"
          }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#E3B300" }}>
                Quick Actions
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {['Add New Property', 'View Calendar', 'Generate Report', 'Manage Listings'].map((action, index) => (
                  <Box
                    key={index}
                    sx={{
                      p: 2,
                      bgcolor: '#fff8e1',
                      borderRadius: 2,
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      border: "1px solid transparent",
                      '&:hover': {
                        bgcolor: '#E3B300',
                        color: 'white',
                        transform: 'translateY(-2px)',
                        boxShadow: "0 4px 12px rgba(227, 179, 0, 0.3)"
                      }
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                      {action}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}