
// import Footer from "../Components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import ResponsiveAppBar from "./navbar";
import { Box } from "@mui/material";
import Footer from "./Footer";

function Layout() {
  const location = useLocation();
  const isLanding = location.pathname === "/home"; // landing page

  return (
    <Box>
      <ResponsiveAppBar />

      {/* Only add padding if it's not the home page */}
      <Box sx={{ paddingTop: isLanding ? "0px" : "90px" }}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
}

export default Layout;