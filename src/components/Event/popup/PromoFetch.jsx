// import useFetch from "../../../custom-hooks/useFetch";
// import { fetchDataFromAPI } from "../../../utils";
// import config from "../../../utils/config";

// export default function PromoFetch(event_ID) {
//   let promo = null; // Set default value for price
//   const endpoint = config.mocking === "true" ? "" : "booking/events/4234/promocode/?promocode=ziad";
// //   const configurationOpt = {
// //     method: "GET",
// //     headers: { "Content-Type": "application/json" ,
// //     "Authorization": "CustomToken 0742e574b81a729c36e8cb536301d876f28ea1d2aa2663de3b573f33bdc46bc4"
// //   },
// // }

// //   const response = fetchDataFromAPI({endpoint, configurationOpt});

// // const { response } = useFetch({endpoint,
// // configurationOpt: {
// //     method: "GET",
// //     headers: { "Content-Type": "application/json" ,
// //     "Authorization": "CustomToken 0742e574b81a729c36e8cb536301d876f28ea1d2aa2663de3b573f33bdc46bc4"
// // }}});
  
// //   if (response && Object.keys(response).length > 0) {
// //     const firstPropertyName = Object.keys(response)[0];
// //     promo = response[firstPropertyName];
// //   }
  
// //   response?.console.log(response);
// var myHeaders = new Headers();
// myHeaders.append("Authorization", "CustomToken 3743b5ecba1461fcbf9ba874653ea8dc6792bd1a58ef656133dc71321f148332");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://event-us.me:8000/booking/events/4234/promocode/?promocode=ziad", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
  
// }  