// api/bookings.js
import axios from 'axios';

const baseUrl = 'https://real-estate-backend-self.vercel.app';
const token= localStorage.getItem('token')
// Get all bookings
export const getAllBookings = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/booking`,{
    headers: {
       token: token,
      }
    });
    return data;
  } catch (error) {
  console.error(" Error get all bookings:", err);
    console.log("Full Error Response:", err?.response);
    return err?.message;
  }
};

// Book a property
export const bookProperty = async ({ propertyId, startDate, endDate }) => {
  try {
    const { data } = await axios.post(`${baseUrl}/booking/${propertyId}/book`, {
      startDate,
      endDate,
    });
    return data;
  } catch (error) {
    console.error(" Error book property:", err);
    console.log("Full Error Response:", err?.response);
    return err?.message;
  }
};
