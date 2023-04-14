const envObj = import.meta.env;
const mocking = envObj.VITE_MOCKING.trim();

const env = {
  mocking,
  baseURL: mocking === "true" ? envObj.VITE_MOCKING_API : envObj.VITE_MAIN_API,
  locationIQAPIKey: envObj.VITE_NAVIGATION_API_KEY,
};

console.log(env.baseURL);
export default Object.freeze(env);
