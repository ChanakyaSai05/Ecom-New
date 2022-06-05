import { Axiosinstance } from "../../util/Axiosinstance";

export const getAllCategories = async () => {
  const URL = "/categories";
  try {
    const response = await Axiosinstance.get(URL);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
