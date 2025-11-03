// hooks/useProperties.js
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const baseUrl = 'https://real-estate-backend-self.vercel.app/api';
const token= localStorage.getItem('token')

export const fetchProperties = async () => {
  try {

  const { data } = await axios.get(`${baseUrl}/property`);
  console.log("Response Data:", data);
  return data;
  

  } catch (err) {
    console.error(" Error:", err);
    console.log("Full Error Response:", err?.response);
    return err?.message;
  }
};


export const fetchSingleProperty = async ( id) => {
  try {

  const { data } = await axios.get(`${baseUrl}/property/${id}`);
  console.log("Response Data:", data);
  return data;
  

  } catch (err) {
    console.error(" Error:", err);
    console.log("Full Error Response:", err?.response);
    return err?.message;
  }
};





// export async function addProperty   (values) {
//   try {
    
//   const response= await axios.post(`${baseUrl}/property`,{values},
//     {
//     headers: {
//        token: token,
//       }
//     }
//   );
//   console.log("Response Data:", response.data);
//    return response.data;

//   } catch (err) {
//     console.error(" Error aad property:", err);
//     console.log("Full Error Response:", err?.response);
//     return err?.message;
//   }
// }




export async function addProperty(values) {
  try {
    const formData = new FormData();

    // append regular fields
    for (const key in values) {
      if (!["image1", "image2", "image3", "image4", "amenities"].includes(key)) {
        formData.append(key, values[key]);
      }
    }

    // append amenities
  values.amenities.forEach((a) => {
  formData.append("amenities[]", a);
});

    // append images
    [values.image1, values.image2, values.image3, values.image4].forEach((img) => {
      if (img) formData.append("images", img);
    });
console.log("🟡 FormData content:");
for (const [key, value] of formData.entries()) {
  console.log(key, value);
}
    const response = await axios.post(`${baseUrl}/property`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        token: token,
      },
    });

    return response.data;
  } catch (err) {
  console.error("❌ Error adding property:", err.response?.data || err.message);
  throw err;
}
}