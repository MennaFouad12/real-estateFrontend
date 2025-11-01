import React from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Typography,
  IconButton,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useproduct } from "../hooks/useProduct";
import { supabase } from "../api/supabaseclient";

// Validation Schema
const validationSchema = Yup.object({
  name: Yup.string().required("Property name is required"),
  description: Yup.string().required("Description is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  type: Yup.string().required("Property type is required"),
  address: Yup.string().required("Address is required"),
  rentPrice: Yup.number()
    .typeError("Must be a number")
    .required("Rent price is required"),
  salePrice: Yup.number()
    .typeError("Must be a number")
    .required("Sale price is required"),
  area: Yup.number().typeError("Must be a number").required("Area is required"),
});

export default function AddProperty() {
  const propertyTypes = ["Apartment", "Villa", "Studio", "Townhouse"];
  const amenitiesList = ["Parking", "Wifi", "Backyard", "Terrace"];
const { addProduct } = useproduct(); // ✅ Access mutation
  const formik = useFormik({
    initialValues: {
    name: "",
      description: "",
      city: "",
      country: "",
      type: "",
      address: "",
      rentPrice: "",
      salePrice: "",
      bedrooms: 1,
      bathrooms: 1,
      garages: 1,
      area: "",
      amenities: [],
      image1: null,
      image2: null,
      image3: null,
      image4: null,
    },
    validationSchema,
      onSubmit: async (values, { resetForm }) => {
      try {
        // 🟡 STEP 1: Collect image files
        const imageFiles = [values.image1, values.image2, values.image3, values.image4].filter(Boolean);
        const uploadedUrls = [];

        // 🟡 STEP 2: Upload each image to Supabase Storage
        for (const file of imageFiles) {
          const fileName = `property-${Date.now()}-${file.name}`;
          const { error: uploadError } = await supabase.storage
            .from("product-images")
            .upload(fileName, file);

          if (uploadError) throw uploadError;

          // 🟡 STEP 3: Get public URL for uploaded image
          const { data: publicData } = supabase.storage
            .from("product-images")
            .getPublicUrl(fileName);

          uploadedUrls.push(publicData.publicUrl);
        }

        // 🟡 STEP 4: Prepare the product object
        const newProperty = {
          name: values.name,
          description: values.description,
          city: values.city,
          country: values.country,
          type: values.type,
          address: values.address,
          rentPrice: Number(values.rentPrice),
          salePrice: Number(values.salePrice),
          bedrooms: Number(values.bedrooms),
          bathrooms: Number(values.bathrooms),
          garages: Number(values.garages),
          area: Number(values.area),
          amenities: values.amenities,
          images: uploadedUrls, // 🟡 store image URLs
        };

        // 🟡 STEP 5: Insert into Supabase
        await addProduct.mutateAsync(newProperty);

        alert("✅ Property added successfully!");
        resetForm();
      } catch (error) {
        console.error("❌ Error adding property:", error.message);
        alert("Failed to add property.");
      }
    },
  });

  const handleAmenityChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      formik.setFieldValue("amenities", [...formik.values.amenities, value]);
    } else {
      formik.setFieldValue(
        "amenities",
        formik.values.amenities.filter((a) => a !== value)
      );
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 1000,
        mx: "auto",
        p: 4,
        bgcolor: "#fff",
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Add New Property
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        {/* Property Name */}
        <TextField
          fullWidth
          label="Property Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          margin="normal"
        />

        {/* Description */}
        <TextField
          fullWidth
          multiline
          rows={3}
          label="Property Description"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
          margin="normal"
        />

        
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
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

          <Grid item xs={12} sm={6}>
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

          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Property Type"
              name="type"
              value={formik.values.type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.type && Boolean(formik.errors.type)}
              helperText={formik.touched.type && formik.errors.type}
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

          <Grid item xs={12} sm={6} md={3}>
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
          </Grid>

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

          <Grid item xs={4} sm={4} md={2}>
            <TextField
              fullWidth
              type="number"
              label="Garages"
              name="garages"
              value={formik.values.garages}
              onChange={formik.handleChange}
              margin="normal"
            />
          </Grid>
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

        {/* Upload Section */}
              <Box display="flex" gap={2} mt={2}>
          {[1, 2, 3, 4].map((i) => (
            <IconButton
              key={i}
              color="warning"
              component="label"
              sx={{
                border: "1px dashed #ccc",
                width: 60,
                height: 60,
              }}
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
        {/* Submit Button */}
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
          disabled={addProduct.isPending}
        >
          {addProduct.isPending ? "Adding..." : "Add Property"}
        </Button>
      </form>
    </Box>
  );
}










