//add to cart
import axios from "axios";
import { useUserStore } from "../store/userStore";


let baseUrl = `https://real-estate-backend-self.vercel.app`

// let token = localStorage.getItem('userToken')

export async function registerApi  (values) {
  try {
    console.log(values);
  const response= await axios.post(`${baseUrl}/api/user/register`,values);
  console.log("Response Data:", response.data);
   return response.data;

  } catch (err) {
    console.error(" Error:", err);
    console.log("Full Error Response:", err?.response);
    return err?.message;
  }
}


export async function loginApi (values) {
  try {
    console.log("values",values);
  const response= await axios.post(`${baseUrl}/api/user/login`,values)
    console.log("Response Data:", response.data);
  
   return response.data;

  } catch (err) {
    console.error(" Error:", err);
    console.log("Full Error Response:", err?.response);
    return err?.message;
  }
}