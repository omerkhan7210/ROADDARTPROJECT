import axios from "axios";
import { ApiResponse } from "../types/business";
import { baseUrl } from "../constants/baseUrl";

const API_URL = `${baseUrl}/businesses`;

export const fetchBusinesses = async (
  page = 1,
  limit = 10
): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>(
      `${API_URL}?page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching businesses:", error);
    throw new Error("Failed to fetch businesses");
  }
};
