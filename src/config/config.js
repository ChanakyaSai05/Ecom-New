const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
console.log(API_BASE_URL);
if (!API_BASE_URL) {
  throw new Error("Api not present");
}
export { API_BASE_URL };
