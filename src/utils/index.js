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

export function parseDate(dateString) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-indexed, so we add 1
  const day = date.getDate();

  return `${year}-${month}-${day}`;
}

export function parseTime(timeString) {
  const date = new Date();
  const [hours, minutes, ampm] = timeString.split(/:| /);
  date.setHours(parseInt(hours, 10) + (ampm.toUpperCase() === "PM" ? 12 : 0));
  date.setMinutes(minutes);

  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

export function convertTimeTo24HourFormat(time) {
  const [rawTime, meridiem] = time.split(" ");

  let [hours, minutes] = rawTime.split(":");
  hours = parseInt(hours);
  minutes = parseInt(minutes);

  if (meridiem === "PM" && hours !== 12) {
    hours += 12;
  } else if (meridiem === "AM" && hours === 12) {
    hours = 0;
  }

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:00`;
}

export function parseDateFromAPI(dateString) {
  // Split the date string into year, day, and month components
  const dateComponents = dateString.split("-");

  // Extract the year, day, and month from the components
  const year = dateComponents[0];
  const day = dateComponents[2];
  const month = dateComponents[1];

  // Create a new Date object using the extracted components
  const dateObj = new Date(year, month - 1, day);

  // Get the current date
  const currentDate = new Date();

  // Compare the dates to determine the day value
  let dayString = "";
  if (dateObj.toDateString() === currentDate.toDateString()) {
    dayString = "today";
  } else if (
    dateObj.toDateString() ===
    new Date(currentDate.getTime() + 24 * 60 * 60 * 1000).toDateString()
  ) {
    dayString = "tomorrow";
  } else {
    dayString = dateObj.toLocaleDateString("en-US", { weekday: "long" });
  }

  // Get the month name
  const monthString = dateObj.toLocaleDateString("en-US", { month: "long" });

  // Format the date string as a template string
  const formattedDate = `${dayString}, ${monthString}, ${day}, ${year}`;

  // Return the formatted date
  return formattedDate;
}
