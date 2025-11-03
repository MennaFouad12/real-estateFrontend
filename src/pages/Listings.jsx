







// import {
//   Box,
//   Checkbox,
//   FormControlLabel,
//   FormGroup,
//   Grid,
//   Typography,
// } from "@mui/material";
// import React, { useState, useMemo } from "react";
// import { styled } from "@mui/material/styles";
// import ProductCard from "../components/ProductCard";
// import MultipleSelect from "../components/Select";
// import { useQuery } from "@tanstack/react-query";
// import { fetchProperties } from "../api/property";

// // ----- Checkbox Styles -----
// const BpIcon = styled("span")(({ theme }) => ({
//   borderRadius: 3,
//   width: 16,
//   height: 16,
//   boxShadow:
//     "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
//   backgroundColor: "#f5f8fa",
//   backgroundImage:
//     "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
// }));

// const BpCheckedIcon = styled(BpIcon)({
//   backgroundColor: "#137cbd",
//   backgroundImage:
//     "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
//   "&::before": {
//     display: "block",
//     width: 16,
//     height: 16,
//     backgroundImage:
//       "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
//       " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
//       "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
//     content: '""',
//   },
// });

// function BpCheckbox(props) {
//   return (
//     <Checkbox
//       sx={{ "&:hover": { bgcolor: "transparent" } }}
//       disableRipple
//       color="default"
//       checkedIcon={<BpCheckedIcon />}
//       icon={<BpIcon />}
//       {...props}
//     />
//   );
// }

// // ----- Component -----
// export default function Listings() {
//   const { data: properties, isLoading } = useQuery({
//     queryKey: ["properties"],
//     queryFn: fetchProperties,
//   });

//   const propertyTypes = ["house", "apartment", "villa", "studio"];
//   const priceRanges = [
//     { label: "$0 to 10,000", min: 0, max: 10000 },
//     { label: "$10,000 to 20,000", min: 10000, max: 20000 },
//     { label: "$20,000 to 40,000", min: 20000, max: 40000 },
//     { label: "$40,000 to 80,000", min: 40000, max: 80000 },
//   ];

//   // State for selected filters
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

//   // Handle Property Type Selection
//   const handleTypeChange = (type) => {
//     setSelectedTypes((prev) =>
//       prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
//     );
//   };

//   // Handle Price Range Selection
//   const handlePriceChange = (range) => {
//     setSelectedPriceRanges((prev) =>
//       prev.includes(range.label)
//         ? prev.filter((r) => r !== range.label)
//         : [...prev, range.label]
//     );
//   };

//   // Filter Logic (client-side)
//   const filteredProperties = useMemo(() => {
//     if (!properties?.data) return [];

//     return properties.data.filter((p) => {
//       const matchesType =
//         selectedTypes.length === 0 || selectedTypes.includes(p.propertyType);

//       const matchesPrice =
//         selectedPriceRanges.length === 0 ||
//         selectedPriceRanges.some((label) => {
//           const range = priceRanges.find((r) => r.label === label);
//           return p.rentPrice >= range.min && p.rentPrice <= range.max;
//         });

//       return matchesType && matchesPrice;
//     });
//   }, [properties, selectedTypes, selectedPriceRanges]);

//   return (
//     <Box sx={{ minHeight: "100vh", backgroundColor: "#FFFDF6", mx: "auto", px: "70px" }}>
//       <Grid container spacing={5}>
//         {/* Sidebar Filters */}
//         <Grid item xs={12} md={3}>
//           <Box sx={{ backgroundColor: "#FEF5D8", p: "20px", borderRadius: "10px" }}>
//             <MultipleSelect />

//             {/* Property Type Filter */}
//             <Typography variant="h6" sx={{ fontSize: "15px", fontWeight: "bold", mb: "10px" }}>
//               Property Type
//             </Typography>
//             <FormGroup sx={{ mb: "30px" }}>
//               {propertyTypes.map((type) => (
//                 <FormControlLabel
//                   key={type}
//                   control={
//                     <BpCheckbox
//                       checked={selectedTypes.includes(type)}
//                       onChange={() => handleTypeChange(type)}
//                     />
//                   }
//                   label={type}
//                 />
//               ))}
//             </FormGroup>

//             {/* Price Range Filter */}
//             <Typography variant="h6" sx={{ fontSize: "15px", fontWeight: "bold", mb: "10px" }}>
//               Price Range
//             </Typography>
//             <FormGroup sx={{ mb: "20px" }}>
//               {priceRanges.map((range) => (
//                 <FormControlLabel
//                   key={range.label}
//                   control={
//                     <BpCheckbox
//                       checked={selectedPriceRanges.includes(range.label)}
//                       onChange={() => handlePriceChange(range)}
//                     />
//                   }
//                   label={range.label}
//                 />
//               ))}
//             </FormGroup>
//           </Box>
//         </Grid>

//         {/* Property Cards */}
//         <Grid item xs={12} md={9}>
//           <Grid container spacing={3}>
//             {isLoading ? (
//               <Typography>Loading...</Typography>
//             ) : filteredProperties.length === 0 ? (
//               <Typography>No properties match your filters.</Typography>
//             ) : (
//               filteredProperties.map((property) => (
//                 <Grid item xs={12} sm={6} md={3} key={property._id}>
//                   <ProductCard property={property} />
//                 </Grid>
//               ))
//             )}
//           </Grid>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }












// import {
//   Box,
//   Checkbox,
//   FormControlLabel,
//   FormGroup,
//   Grid,
//   Typography,
// } from "@mui/material";
// import React, { useState, useMemo } from "react";
// import { styled } from "@mui/material/styles";
// import ProductCard from "../components/ProductCard";
// import MultipleSelect from "../components/Select";
// import { useQuery } from "@tanstack/react-query";
// import { fetchProperties } from "../api/property";

// // ----- Custom Checkbox Styles -----
// const BpIcon = styled("span")(() => ({
//   borderRadius: 3,
//   width: 16,
//   height: 16,
//   boxShadow:
//     "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
//   backgroundColor: "#f5f8fa",
//   backgroundImage:
//     "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
// }));

// const BpCheckedIcon = styled(BpIcon)({
//   backgroundColor: "#137cbd",
//   backgroundImage:
//     "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
//   "&::before": {
//     display: "block",
//     width: 16,
//     height: 16,
//     backgroundImage:
//       "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
//       " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
//       "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
//     content: '""',
//   },
// });

// function BpCheckbox(props) {
//   return (
//     <Checkbox
//       sx={{ "&:hover": { bgcolor: "transparent" } }}
//       disableRipple
//       color="default"
//       checkedIcon={<BpCheckedIcon />}
//       icon={<BpIcon />}
//       {...props}
//     />
//   );
// }

// // ----- Component -----
// export default function Listings() {
//   const { data: properties, isLoading } = useQuery({
//     queryKey: ["properties"],
//     queryFn: fetchProperties,
//   });

//   const propertyTypes = ["house", "apartment", "villa", "studio"];
//   const priceRanges = [
//     { label: "$0 to 10,000", min: 0, max: 10000 },
//     { label: "$10,000 to 20,000", min: 10000, max: 20000 },
//     { label: "$20,000 to 40,000", min: 20000, max: 40000 },
//     { label: "$40,000 to 80,000", min: 40000, max: 80000 },
//   ];

//   // State for selected filters
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

//   // Handle Property Type Selection
//   const handleTypeChange = (type) => {
//     setSelectedTypes((prev) =>
//       prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
//     );
//   };

//   // Handle Price Range Selection
//   const handlePriceChange = (range) => {
//     setSelectedPriceRanges((prev) =>
//       prev.includes(range.label)
//         ? prev.filter((r) => r !== range.label)
//         : [...prev, range.label]
//     );
//   };

//   // Filter Logic (client-side)
//   const filteredProperties = useMemo(() => {
//     if (!properties?.data) return [];

//     return properties.data.filter((p) => {
//       const matchesType =
//         selectedTypes.length === 0 || selectedTypes.includes(p.propertyType);

//       const matchesPrice =
//         selectedPriceRanges.length === 0 ||
//         selectedPriceRanges.some((label) => {
//           const range = priceRanges.find((r) => r.label === label);
//           return p.rentPrice >= range.min && p.rentPrice <= range.max;
//         });

//       return matchesType && matchesPrice;
//     });
//   }, [properties, selectedTypes, selectedPriceRanges]);

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         backgroundColor: "#FFFDF6",
//         px: { xs: 2, md: 6 },
//         py: 5,
//       }}
//     >
//       <Grid container spacing={4}>
//         {/* Sidebar Filters */}
//         <Grid item xs={12} md={3}>
//           <Box
//             sx={{
//               backgroundColor: "#FEF5D8",
//               p: 3,
//               borderRadius: 2,
//               position: { md: "sticky" },
//               top: { md: 100 },
//               height: "fit-content",
//             }}
//           >
//             <MultipleSelect />

//             {/* Property Type Filter */}
//             <Typography
//               variant="h6"
//               sx={{ fontSize: "15px", fontWeight: "bold", mb: 1, mt: 3 }}
//             >
//               Property Type
//             </Typography>
//             <FormGroup sx={{ mb: 3 }}>
//               {propertyTypes.map((type) => (
//                 <FormControlLabel
//                   key={type}
//                   control={
//                     <BpCheckbox
//                       checked={selectedTypes.includes(type)}
//                       onChange={() => handleTypeChange(type)}
//                     />
//                   }
//                   label={type}
//                 />
//               ))}
//             </FormGroup>

//             {/* Price Range Filter */}
//             <Typography
//               variant="h6"
//               sx={{ fontSize: "15px", fontWeight: "bold", mb: 1 }}
//             >
//               Price Range
//             </Typography>
//             <FormGroup>
//               {priceRanges.map((range) => (
//                 <FormControlLabel
//                   key={range.label}
//                   control={
//                     <BpCheckbox
//                       checked={selectedPriceRanges.includes(range.label)}
//                       onChange={() => handlePriceChange(range)}
//                     />
//                   }
//                   label={range.label}
//                 />
//               ))}
//             </FormGroup>
//           </Box>
//         </Grid>

//         {/* Property Cards */}
//         <Grid item xs={12} md={9}>
//           <Grid container spacing={3}>
//             {isLoading ? (
//               <Typography>Loading...</Typography>
//             ) : filteredProperties.length === 0 ? (
//               <Typography>No properties match your filters.</Typography>
//             ) : (
//               filteredProperties.map((property) => (
//                 <Grid item xs={12} sm={6} md={4} key={property._id}>
//                   {/* 👇 changed to md={4} to fit 3 cards per row */}
//                   <ProductCard property={property} />
//                 </Grid>
//               ))
//             )}
//           </Grid>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }















import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState, useMemo } from "react";
import { styled } from "@mui/material/styles";
import ProductCard from "../components/ProductCard";
import MultipleSelect from "../components/Select";
import { useQuery } from "@tanstack/react-query";
import { fetchProperties } from "../api/property";

// ----- Custom Checkbox Styles -----
const BpIcon = styled("span")(() => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow:
    "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: "#f5f8fa",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&::before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
});

function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{ "&:hover": { bgcolor: "transparent" } }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

// ----- Component -----
export default function Listings() {
  const { data: properties, isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: fetchProperties,
  });

  const propertyTypes = ["house", "apartment", "villa", "studio"];
  const priceRanges = [
    { label: "$0 to 10,000", min: 0, max: 10000 },
    { label: "$10,000 to 20,000", min: 10000, max: 20000 },
    { label: "$20,000 to 40,000", min: 20000, max: 40000 },
    { label: "$40,000 to 80,000", min: 40000, max: 80000 },
  ];

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handlePriceChange = (range) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(range.label)
        ? prev.filter((r) => r !== range.label)
        : [...prev, range.label]
    );
  };

  const filteredProperties = useMemo(() => {
    if (!properties?.data) return [];

    return properties.data.filter((p) => {
      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(p.propertyType);
      const matchesPrice =
        selectedPriceRanges.length === 0 ||
        selectedPriceRanges.some((label) => {
          const range = priceRanges.find((r) => r.label === label);
          return p.rentPrice >= range.min && p.rentPrice <= range.max;
        });
      return matchesType && matchesPrice;
    });
  }, [properties, selectedTypes, selectedPriceRanges]);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        backgroundColor: "#FFFDF6",
        minHeight: "100vh",
        px: { xs: 2, md: 6 },
        py: 4,
      }}
    >
      {/* Sidebar Filters */}
      <Box
        sx={{
          width: { xs: "100%", md: "17%" },
          backgroundColor: "#FEF5D8",
          p: 3,
          borderRadius: 2,
          position: { md: "sticky" },
          top: { md: 100 },
          height: "fit-content",
          flexShrink: 0,
        }}
      >
        <MultipleSelect />

        <Typography
          variant="h6"
          sx={{ fontSize: "15px", fontWeight: "bold", mb: 1, mt: 3 }}
        >
          Property Type
        </Typography>
        <FormGroup sx={{ mb: 3 }}>
          {propertyTypes.map((type) => (
            <FormControlLabel
              key={type}
              control={
                <BpCheckbox
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleTypeChange(type)}
                />
              }
              label={type}
            />
          ))}
        </FormGroup>

        <Typography
          variant="h6"
          sx={{ fontSize: "15px", fontWeight: "bold", mb: 1 }}
        >
          Price Range
        </Typography>
        <FormGroup>
          {priceRanges.map((range) => (
            <FormControlLabel
              key={range.label}
              control={
                <BpCheckbox
                  checked={selectedPriceRanges.includes(range.label)}
                  onChange={() => handlePriceChange(range)}
                />
              }
              label={range.label}
            />
          ))}
        </FormGroup>
      </Box>

      {/* Property Cards */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {isLoading ? (
            <Typography>Loading...</Typography>
          ) : filteredProperties.length === 0 ? (
            <Typography>No properties match your filters.</Typography>
          ) : (
            filteredProperties.map((property) => (
              <Grid item xs={12} sm={6} md={4} key={property._id}>
                <ProductCard property={property} />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Box>
  );
}

