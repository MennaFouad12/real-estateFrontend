// import React from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   Grid,
//   MenuItem,
//   Checkbox,
//   FormControlLabel,
//   Typography,
//   IconButton,
// } from "@mui/material";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// // import { useproduct } from "../hooks/useProduct";
// // import { supabase } from "../api/supabaseclient";

// // Validation Schema
// const validationSchema = Yup.object({
//   name: Yup.string().required("Property name is required"),
//   description: Yup.string().required("Description is required"),
//   city: Yup.string().required("City is required"),
//   country: Yup.string().required("Country is required"),
//   type: Yup.string().required("Property type is required"),
//   address: Yup.string().required("Address is required"),
//   rentPrice: Yup.number()
//     .typeError("Must be a number")
//     .required("Rent price is required"),
//   salePrice: Yup.number()
//     .typeError("Must be a number")
//     .required("Sale price is required"),
//   area: Yup.number().typeError("Must be a number").required("Area is required"),
// });

// export default function AddProperty() {
//   const propertyTypes = ['apartment', 'house', 'villa', 'studio'];
//   const amenitiesList = ["parking", "wifi", "backyard", "terrace"];
// // const { addProduct } = useproduct(); // ✅ Access mutation
//   const formik = useFormik({
//     initialValues: {
//     name: "",
//       description: "",
//       city: "",
//       country: "",
//       type: "",
//       address: "",
//       rentPrice: "",
//       salePrice: "",
//       bedrooms: 1,
//       bathrooms: 1,
      
//       area: "",
//       amenities: [],
//       image1: null,
//       image2: null,
//       image3: null,
//       image4: null,
//     },
//     validationSchema,
//     onSubmit: async (values, { resetForm }) => {
//       try {
//         await addProperty.mutateAsync(values);
//         alert("✅ Property added successfully!");
//         resetForm();
//       } catch (err) {
//         console.error("❌ Error adding property:", err);
//         alert("Failed to add property.");
//       }
//     },
//   });

//   // });

//   const handleAmenityChange = (event) => {
//     const { value, checked } = event.target;
//     if (checked) {
//       formik.setFieldValue("amenities", [...formik.values.amenities, value]);
//     } else {
//       formik.setFieldValue(
//         "amenities",
//         formik.values.amenities.filter((a) => a !== value)
//       );
//     }
//   };

//   return (
//     <Box
//       sx={{
//         maxWidth: 1000,
//         mx: "auto",
//         p: 4,
//         bgcolor: "#fff",
//         borderRadius: 2,
//         boxShadow: 2,
//       }}
//     >
//       <Typography variant="h5" fontWeight="bold" mb={3}>
//         Add New Property
//       </Typography>

//       <form onSubmit={formik.handleSubmit}>
//         {/* Property Name */}
//         <TextField
//           fullWidth
//           label="Property Name"
//           name="name"
//           value={formik.values.name}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.name && Boolean(formik.errors.name)}
//           helperText={formik.touched.name && formik.errors.name}
//           margin="normal"
//         />

//         {/* Description */}
//         <TextField
//           fullWidth
//           multiline
//           rows={3}
//           label="Property Description"
//           name="description"
//           value={formik.values.description}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.description && Boolean(formik.errors.description)}
//           helperText={formik.touched.description && formik.errors.description}
//           margin="normal"
//         />

        
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={4}>
//             <TextField
//               fullWidth
//               label="City"
//               name="city"
//               value={formik.values.city}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.city && Boolean(formik.errors.city)}
//               helperText={formik.touched.city && formik.errors.city}
//               margin="normal"
//             />
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <TextField
//               fullWidth
//               label="Country"
//               name="country"
//               value={formik.values.country}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.country && Boolean(formik.errors.country)}
//               helperText={formik.touched.country && formik.errors.country}
//               margin="normal"
//             />
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <TextField
//               select
//               fullWidth
//               label="Property Type"
//               name="type"
//               value={formik.values.type}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.type && Boolean(formik.errors.type)}
//               helperText={formik.touched.type && formik.errors.type}
//               margin="normal"
//             >
//               {propertyTypes.map((type) => (
//                 <MenuItem key={type} value={type}>
//                   {type}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>

        
//         </Grid>
// <Grid container spacing={2}>



//   <Grid item xs={12} md={9}>
//             <TextField
//               fullWidth
//               label="Address"
//               name="address"
//               value={formik.values.address}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.address && Boolean(formik.errors.address)}
//               helperText={formik.touched.address && formik.errors.address}
//               margin="normal"
//             />
//           </Grid>
//   <Grid item xs={12} sm={6} md={3}>
    
//             <TextField
//               fullWidth
//               label="Area (sq ft)"
//               name="area"
//               value={formik.values.area}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.area && Boolean(formik.errors.area)}
//               helperText={formik.touched.area && formik.errors.area}
//               margin="normal"
//             />
//           </Grid>

        

// </Grid>
        
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6} md={3}>
//             <TextField
//               fullWidth
//               label="Rent Price /night"
//               name="rentPrice"
//               value={formik.values.rentPrice}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.rentPrice && Boolean(formik.errors.rentPrice)}
//               helperText={formik.touched.rentPrice && formik.errors.rentPrice}
//               margin="normal"
//             />
//           </Grid>

//           <Grid item xs={12} sm={6} md={3}>
//             <TextField
//               fullWidth
//               label="Sale Price"
//               name="salePrice"
//               value={formik.values.salePrice}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.salePrice && Boolean(formik.errors.salePrice)}
//               helperText={formik.touched.salePrice && formik.errors.salePrice}
//               margin="normal"
//             />
//           </Grid>

//           <Grid item xs={4} sm={4} md={2}>
//             <TextField
//               fullWidth
//               type="number"
//               label="Bedrooms"
//               name="bedrooms"
//               value={formik.values.bedrooms}
//               onChange={formik.handleChange}
//               margin="normal"
//             />
//           </Grid>

//           <Grid item xs={4} sm={4} md={2}>
//             <TextField
//               fullWidth
//               type="number"
//               label="Bathrooms"
//               name="bathrooms"
//               value={formik.values.bathrooms}
//               onChange={formik.handleChange}
//               margin="normal"
//             />
//           </Grid>

//           {/* <Grid item xs={4} sm={4} md={2}>
//             <TextField
//               fullWidth
//               type="number"
//               label="Garages"
//               name="garages"
//               value={formik.values.garages}
//               onChange={formik.handleChange}
//               margin="normal"
//             />
//           </Grid> */}
//         </Grid>

//         {/* Amenities */}
//         <Box mt={2}>
//           <Typography fontWeight="bold" mb={1}>
//             Amenities
//           </Typography>
//           <Box display="flex" flexWrap="wrap">
//             {amenitiesList.map((a) => (
//               <FormControlLabel
//                 key={a}
//                 control={
//                   <Checkbox
//                     value={a}
//                     checked={formik.values.amenities.includes(a)}
//                     onChange={handleAmenityChange}
//                   />
//                 }
//                 label={a}
//               />
//             ))}
//           </Box>
//         </Box>

//         {/* Upload Section */}
//               <Box display="flex" gap={2} mt={2}>
//           {[1, 2, 3, 4].map((i) => (
//             <IconButton
//               key={i}
//               color="warning"
//               component="label"
//               sx={{
//                 border: "1px dashed #ccc",
//                 width: 60,
//                 height: 60,
//               }}
//             >
//               <CloudUploadIcon />
//               <input
//                 type="file"
//                 hidden
//                 accept="image/*"
//                 onChange={(e) =>
//                   formik.setFieldValue(`image${i}`, e.currentTarget.files[0])
//                 }
//               />
//             </IconButton>
//           ))}
//         </Box>
//         {/* Submit Button */}
//               <Button
//           type="submit"
//           variant="contained"
//           fullWidth
//           sx={{
//             mt: 3,
//             bgcolor: "#E3B300",
//             color: "#000",
//             fontWeight: "bold",
//             "&:hover": { bgcolor: "#d2a700" },
//           }}
//           // disabled={addProduct.isPending}
//         >
//           {/* {addProduct.isPending ? "Adding..." : "Add Property"} */}
//         </Button>
//       </form>
//     </Box>
//   );
// }










import React from "react";
import { useMutation } from "@tanstack/react-query";
import { addProperty } from "../api/property"; // import your API function
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
  Grid,
  IconButton,
  MenuItem,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function AddProperty() {
  const amenitiesList = ["parking", "wifi", "backyard", "terrace"];
  const propertyTypes = ["apartment", "house", "villa", "studio"];

  // ✅ React Query Mutation
  const mutation = useMutation({
    mutationFn: addProperty,
    onSuccess: (data) => {
      console.log("✅ Property Added:", data);
      alert("Property added successfully!");
      formik.resetForm();
    },
    onError: (error) => {
      console.error("❌ Error:", error);
      alert("Failed to add property.");
    },
  });

  const formik = useFormik({
    initialValues: {
      propertyName: "",
      propertyDescription: "",
      city: "",
      country: "",
      propertyType: "",
      address: "",
      rentPrice: "",
      // salePrice: "",
      bedrooms: 1,
      bathrooms: 1,
      area: "",
      amenities: [],
      image1: null,
      image2: null,
      image3: null,
      image4: null,
    },
    validationSchema: Yup.object({
      propertyName: Yup.string().required("Property name is required"),
      propertyDescription: Yup.string().required("Description is required"),
      city: Yup.string().required("City is required"),
      country: Yup.string().required("Country is required"),
      propertyType: Yup.string().required("Property type is required"),
      address: Yup.string().required("Address is required"),
      rentPrice: Yup.number().required("Rent price is required"),
      // salePrice: Yup.number().required("Sale price is required"),
      area: Yup.number().required("Area is required"),
    }),
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });

  const handleAmenityChange = (event) => {
    const { value, checked } = event.target;
    formik.setFieldValue(
      "amenities",
      checked
        ? [...formik.values.amenities, value]
        : formik.values.amenities.filter((a) => a !== value)
    );
  };

  return (
    <Box sx={{ maxWidth: 1000, mx: "auto", p: 4, bgcolor: "#fff", borderRadius: 2, boxShadow: 2 }}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Add New Property
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        {/* Property Name */}
       <TextField
          fullWidth
          label="Property Name"
          name="propertyName"
          value={formik.values.propertyName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.propertyName && Boolean(formik.errors.propertyName)}
          helperText={formik.touched.propertyName && formik.errors.propertyName}
          margin="normal"
        />

        {/* Description */}
        <TextField
          fullWidth
          multiline
          rows={3}
          label="Property Description"
          name="propertyDescription"
          value={formik.values.propertyDescription}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.propertyDescription && Boolean(formik.errors.propertyDescription)}
          helperText={formik.touched.propertyDescription && formik.errors.propertyDescription}
          margin="normal"
        />

        
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="City"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
              margin="normal"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Country"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
              margin="normal"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              select
              fullWidth
              label="Property Type"
              name="propertyType"
              value={formik.values.propertyType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.propertyType && Boolean(formik.errors.propertyType)}
              helperText={formik.touched.propertyType && formik.errors.propertyType}
              margin="normal"
            >
              {propertyTypes.map((type) => (
                <MenuItem key={type} value={type}>
            
                  {type}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

        
        </Grid>
<Grid container spacing={2}>



  <Grid item xs={12} md={9}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
              margin="normal"
            />
          </Grid>
  <Grid item xs={12} sm={6} md={3}>
    
            <TextField
              fullWidth
              label="Area (sq ft)"
              name="area"
              value={formik.values.area}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.area && Boolean(formik.errors.area)}
              helperText={formik.touched.area && formik.errors.area}
              margin="normal"
            />
          </Grid>

        

</Grid>
        
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              label="Rent Price /night"
              name="rentPrice"
              value={formik.values.rentPrice}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.rentPrice && Boolean(formik.errors.rentPrice)}
              helperText={formik.touched.rentPrice && formik.errors.rentPrice}
              margin="normal"
            />
          </Grid>

          {/* <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              label="Sale Price"
              name="salePrice"
              value={formik.values.salePrice}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.salePrice && Boolean(formik.errors.salePrice)}
              helperText={formik.touched.salePrice && formik.errors.salePrice}
              margin="normal"
            />
          </Grid> */}

          <Grid item xs={4} sm={4} md={2}>
            <TextField
              fullWidth
              type="number"
              label="Bedrooms"
              name="bedrooms"
              value={formik.values.bedrooms}
              onChange={formik.handleChange}
              margin="normal"
            />
          </Grid>

          <Grid item xs={4} sm={4} md={2}>
            <TextField
              fullWidth
              type="number"
              label="Bathrooms"
              name="bathrooms"
              value={formik.values.bathrooms}
              onChange={formik.handleChange}
              margin="normal"
            />
          </Grid>

          {/* <Grid item xs={4} sm={4} md={2}>
            <TextField
              fullWidth
              type="number"
              label="Garages"
              name="garages"
              value={formik.values.garages}
              onChange={formik.handleChange}
              margin="normal"
            />
          </Grid> */}
        </Grid>

        {/* Amenities */}
        <Box mt={2}>
          <Typography fontWeight="bold" mb={1}>
            Amenities
          </Typography>
          <Box display="flex" flexWrap="wrap">
            {amenitiesList.map((a) => (
              <FormControlLabel
                key={a}
                control={
                  <Checkbox
                    value={a}
                    checked={formik.values.amenities.includes(a)}
                    onChange={handleAmenityChange}
                  />
                }
                label={a}
              />
            ))}
          </Box>
        </Box>

        {/* Image Upload */}
        <Box display="flex" gap={2} mt={2}>
          {[1, 2, 3, 4].map((i) => (
            <IconButton
              key={i}
              color="warning"
              component="label"
              sx={{ border: "1px dashed #ccc", width: 60, height: 60 }}
            >
              <CloudUploadIcon />
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) =>
                  formik.setFieldValue(`image${i}`, e.currentTarget.files[0])
                }
              />
            </IconButton>
          ))}
        </Box>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            bgcolor: "#E3B300",
            color: "#000",
            fontWeight: "bold",
            "&:hover": { bgcolor: "#d2a700" },
          }}
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Adding..." : "Add Property"}
        </Button>
      </form>
    </Box>
  );
}
