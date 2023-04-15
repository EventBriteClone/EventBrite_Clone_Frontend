import config from "./config";

export async function getCurrentCity() {
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

export function filterMockDataByCity(events, city) {
  return events.filter((event) => event.location.includes(city));
}

//mocking = true
//config.baseUrl = 'https://localhost:3000/'
//mocking = false
//config.baseUrl = 'https://event-us.me:8000/'

export async function fetchDataFromAPI({ endpoint, configurationOpt = {} }) {
  try {
    const res = await fetch(`${config.baseURL}${endpoint}`, configurationOpt);
    const data = await res.json();
    return data;
  } catch (error) {
    // console.error(error);
    return { error };
  }
}
