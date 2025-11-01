// import React from 'react';
// import ReactDOM from 'react-dom';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import { Button, TextField } from '@mui/material';


// export default function Contact() {
//   const validationSchema = yup.object({
//   email: yup
//     .string('Enter your email')
//     .email('Enter a valid email')
//     .required('Email is required'),
//   password: yup
//     .string('Enter your password')
//     .min(8, 'Password should be of minimum 8 characters length')
//     .required('Password is required'),
// });
// const WithMaterialUI = () => {
//   const formik = useFormik({
//     initialValues: {
//       email: 'foobar@example.com',
//       password: 'foobar',
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//  <div>
//       <form onSubmit={formik.handleSubmit}>
//         <TextField
//           fullWidth
//           id="email"
//           name="email"
//           label="Email"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.email && Boolean(formik.errors.email)}
//           helperText={formik.touched.email && formik.errors.email}
//         />
//         <TextField
//           fullWidth
//           id="password"
//           name="password"
//           label="Password"
//           type="password"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.password && Boolean(formik.errors.password)}
//           helperText={formik.touched.password && formik.errors.password}
//         />
//         <Button color="primary" variant="contained" fullWidth type="submit">
//           Submit
//         </Button>
//       </form>
//     </div>
//   )
// }

// }



import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
export default function Contact() {
  const validationSchema = yup.object({
    email: yup.string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup.string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh" }}>

      <form onSubmit={formik.handleSubmit}>
    <Typography  sx={{ mb: "20px", fontWeight: "bold",backgroundColor:"black",padding:"2px 5px",color:'white',width:"fit-content",borderRadius:"30px",fontSize:"12px",margin:"0 auto" }}>Contact Us</Typography>

          <Typography variant="h4" sx={{ mb: "20px", fontWeight: "bold" }}>Let’s Get In Touch</Typography>
          <Typography sx={{ mb: "20px",fontSize:"12px"}} color='text.secondary'>Or just reach out manually to us at contact@nestorria.com</Typography>
        {/* <TextField
        sx={{display:"block",borderRadius:"50px",outline:"none",border:"none",mb:"20px"}}
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        /> */}

        <Typography sx={{ mb: "5px", fontWeight: 400 }}>Email Address</Typography>
        <TextField
          placeholder="Enter your email address"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineIcon style={{ color: "#7d7c7c" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            display: "block",
            mb: "20px",

            "& .MuiOutlinedInput-root": {
              borderRadius: "50px",
              backgroundColor: "#fff8e1", // light yellow like your example
              "& fieldset": { border: "none" }, // remove outline
              "&:hover fieldset": { border: "none" },
              "&.Mui-focused fieldset": { border: "1px solid #ccc" },
              paddingLeft: "5px",
              width: "300px",
            },
          }}

        />
        <Typography sx={{ mb: "5px", fontWeight: 400 }}>Password</Typography>
        <TextField

          // id="password"
          name="password"
          placeholder="Enter your password"
          // label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineIcon style={{ color: "#7d7c7c" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            display: "block",
            mb: "20px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "50px",
              backgroundColor: "#fff8e1", // light yellow like your example
              "& fieldset": { border: "none" }, // remove outline
              "&:hover fieldset": { border: "none" },
              "&.Mui-focused fieldset": { border: "1px solid #ccc" },
              paddingLeft: "5px",
              width: "300px",
            },
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Button sx={{backgroundColor:"#E3B300",borderRadius:"30px"}} variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}




// Selector	What it controls
// .MuiOutlinedInput-root	The outer box of the input (rounded corners, padding, background)
// .MuiOutlinedInput-input	The text inside the field
// .MuiOutlinedInput-notchedOutline	The border/outline of the TextField