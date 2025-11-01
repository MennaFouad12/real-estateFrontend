



import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link, useNavigate } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';

import { loginApi } from '../api/auth';
import { useUserStore } from '../store/userStore';

export default function Login() {

const navigate = useNavigate();
  const { user, setUser} = useUserStore();

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
    onSubmit: async (values) => {
      try {
        const data=await loginApi(values);
        setUser(data.user);
        console.log("user",user);
        alert("✅you login successfully!");
        formik.resetForm();
      } catch (err) {
        alert(`❌ Error: ${err.message}`);
      }
    },
  });

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh" }}>

      <form onSubmit={formik.handleSubmit}>
    <Typography  sx={{ mb: "20px", fontWeight: "bold",backgroundColor:"black",padding:"2px 5px",color:'white',width:"fit-content",borderRadius:"30px",fontSize:"12px",margin:"0 auto" }}>Login</Typography>

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
                <MailOutlineIcon style={{ color: "#7d7c7c",marginLeft:"10px" }} />
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
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">
          //       <MailOutlineIcon style={{ color: "#7d7c7c" }} />
          //     </InputAdornment>
          //   ),
          // }}
          InputProps={{
    startAdornment: (
      <LockIcon sx={{ mr: 1, color: 'gray' ,ml:"10px"}} />
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
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" ,mb:"20px"}}>
          <Button onClick={()=> navigate("/home")}  sx={{backgroundColor:"#E3B300",borderRadius:"30px"}} variant="contained"  type="submit">
            Login
          </Button>
        
        </Box>
        <Typography color='text.secondary' sx={{mb:"50px"}}>if you don't have an account ? <Link to="/register">Register</Link></Typography>
      </form>
    </Box>
  );
}




// Selector	What it controls
// .MuiOutlinedInput-root	The outer box of the input (rounded corners, padding, background)
// .MuiOutlinedInput-input	The text inside the field
// .MuiOutlinedInput-notchedOutline	The border/outline of the TextField