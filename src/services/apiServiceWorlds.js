import axios from "axios";

const WORLD_API_URL = "http://localhost:8080/api/world";

export const getLawLevels = async () => {
  try {
    const response = await axios.get(`${WORLD_API_URL}/law-levels`);
    return response.data;
  } catch (error) {
    console.error("Error fetching law-levels:", error);
    throw error;
  }
};

export const getUwpTables = async () => {
  try {
    const response = await axios.get(`${WORLD_API_URL}/uwp`);
    return response.data;
  } catch (error) {
    console.error("Error fetching uwp tables:", error);
    throw error;
  }
};
