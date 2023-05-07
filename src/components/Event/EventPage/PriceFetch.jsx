import useFetch from "../../../custom-hooks/useFetch";
import config from "../../../utils/config";

export default function PriceFetch(event_ID) {
  let price = null; // Set default value for price
  const endpoint = config.mocking === "true" ? "" : `events/TicketsPrice/${event_ID}/`;
  const { response } = useFetch({
    endpoint,
    configurationOpt: {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
  });
  
  if (response && Object.keys(response).length > 0) {
    const firstPropertyName = Object.keys(response)[0];
    price = response[firstPropertyName];
  }
  
  return price;
}

  