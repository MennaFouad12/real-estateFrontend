import React, { useState } from "react";
import { Box, TextField, IconButton, Collapse } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox() {
  const [showSearch, setShowSearch] = useState(false);

  const handleToggle = () => setShowSearch((prev) => !prev);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: showSearch ? "space-between" : "flex-end",
        backgroundColor: "white",
        borderRadius: "70px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        width: showSearch ? "400px" : "40px",
        height: "40px",
        transition: "all 0.3s ease",
        overflow: "hidden",
      }}
    >
      {/* حقل الكتابة - يظهر فقط عند showSearch = true */}
      <Collapse orientation="horizontal" in={showSearch} timeout={300}>
        <TextField
          id="filled-basic"
          label="Write something..."
          variant="standard"
          fullWidth
          autoFocus
          InputProps={{
            disableUnderline: true,
          }}
          sx={{
            ml: 2,
            mr: 2,
            border: "none",
            outline: "none",
            "& .MuiInputBase-input": {
              paddingY: 1,
            },
          }}
        />
      </Collapse>

      {/* زر البحث */}
      <IconButton
        color="primary"
        onClick={handleToggle}
        sx={{
          backgroundColor: "white",
          color: "black",
          fontWeight: "bold",
          border: "1px solid grey",
          height: "40px",
          width: "40px",
          borderRadius: "50%",
          "&:hover": {
            backgroundColor: "#f7f7f7",
          },
          transition: "all 0.3s ease",
          // mr: 1,
        }}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
