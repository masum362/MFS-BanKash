import axios from "axios";

const base_url = import.meta.env.VITE_BACKEND_URL;
const token = JSON.parse(localStorage.getItem("token")) ?? "";

const commonGetUrl = async (url, data) => {
  try {
    const response = await axios.get(`${base_url}/${url}`, data, {
      withCredentials: true,
      headers:{
        Authorization: 'Bearer ' + token
      }
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
const commonPostUrl = async (url, data) => {
  try {
    const response = await axios.post(`${base_url}/${url}`, data, {
      withCredentials: true,
      headers:{
        Authorization: 'Bearer ' + token
      }
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export {commonGetUrl, commonPostUrl}
