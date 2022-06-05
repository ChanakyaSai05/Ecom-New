import { Axiosinstance } from "../../util/Axiosinstance";

export const getAllProducts = async (url) => {
  //   const URL="/products";
  const URL = url;
  try {
    const response = await Axiosinstance(URL);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
