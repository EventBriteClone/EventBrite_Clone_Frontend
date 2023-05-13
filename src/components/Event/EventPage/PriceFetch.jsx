import useFetch from "../../../custom-hooks/useFetch";
import config from "../../../utils/config";

/**

Function to fetch the price of tickets for a given event ID
@param {string} event_ID - The ID of the event for which ticket price is to be fetched
@returns {number|null} - The price of the tickets for the event, or null if no price is found
*/
export default function PriceFetch(event_ID) {
  let price = null; // Set default value for price
  const endpoint =
    config.mocking === "true" ? "" : `events/TicketsPrice/${event_ID}/`;
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

  console.log(response);

  console.log(price);
  return price;
}
