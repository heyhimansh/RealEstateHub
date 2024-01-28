import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const getAllProperties = async () => {
  try {
    const response = await api.get("/residency/allresd", {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const getProperty = async (id) => {
  try {
    const response = await api.get(`/residency/${id}`, {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

// creates the user version in data base
export const createUser = async (email) => {
  try {
    await api.post(
      `/user/register`,
      { email },
     
    );
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};

export const bookVisit = async (date, propertyId, email) => {
  try {
    await api.post(
      `/user/bookVisit/${propertyId}`,
      {
        email,
        id: propertyId,
        date: dayjs(date).format("DD/MM/YYYY"),
      }
    );
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};

export const removeBooking = async (id, email) => {
  try {
    await api.post(
      `/user/removeBooking/${id}`,
      {
        email,
      }
    );
  } catch (error) {
    toast.error("Something went wrong, Please try again");

    throw error;
  }
};

export const toFav = async (id, email) => {
  try {
    await api.post(`/user/toFav/${id}`, {
      email,
    });
  } catch (e) {
    throw e;
  }
};

export const getAllFav = async (email) => {
  // if (!token) return;
  try {
    const res = await api.post(`/user/allFav`, {
      email,
    });

    return res.data["favResidenciesID"];
  } catch (e) {
    toast.error("Something went wrong while fetching favs");
    throw e;
  }
};

export const getAllBookings = async (email) => {
  // if (!token) return;
  try {
    const res = await api.post(`/user/allBookings`, {
      email,
    });
    return res.data["bookedVisits"];
  } catch (error) {
    toast.error("Something went wrong while fetching bookings");
    throw error;
  }
};

export const createResidency = async (data) => {
  console.log(data);
  try {
    const res = await api.post(
      `/residency/create`,
      {
        data,
      }
    );
  } catch (error) {
    throw error;
  }
};
