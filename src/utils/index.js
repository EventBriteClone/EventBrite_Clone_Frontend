import config from "./config";

export default async function getCurrentCity() {
  try {
    const { latitude, longitude } = await getLocationCoords();
    const res = await fetch(
      `https://us1.locationiq.com/v1/reverse?key=${config.locationIQAPIKey}&lat=${latitude}&lon=${longitude}&format=json`
    );
    const data = await res.json();
    const { city } = data.address;
    return city;
  } catch (error) {
    console.error(error);
  }
}

function getLocationCoords() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        const { coords } = data;
        const { latitude, longitude } = coords;
        const latLng = { latitude, longitude };
        resolve(latLng);
      },
      (err) => {
        reject(err);
      }
    );
  });
}
