import { useContext } from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { CreateEventContext } from "../../../context/CreateEventContext";

export default function ImageGallery() {
  const { createEvent: event } = useContext(CreateEventContext);
  console.log(event);
  const items = event.images.map((imgObj) => {
    return {
      original: imgObj.src,
      thumbnail: imgObj.src,
    };
  });
  return (
    <ReactImageGallery
      showPlayButton={false}
      autoPlay={false}
      showBullets
      items={items}
    />
  );
}

// items={[
//   {
//     original:
//       "https://cdn.evbstatic.com/s3-build/fe/build/images/777f19086d57c5de5a008b3ea3b0d2bc-6_mobile_659x494.jpg",
//     thumbnail:
//       "https://cdn.evbstatic.com/s3-build/fe/build/images/777f19086d57c5de5a008b3ea3b0d2bc-6_mobile_659x494.jpg",
//   },
//   {
//     original:
//       "https://cdn.evbstatic.com/s3-build/fe/build/images/777f19086d57c5de5a008b3ea3b0d2bc-6_mobile_659x494.jpg",
//     thumbnail:
//       "https://cdn.evbstatic.com/s3-build/fe/build/images/777f19086d57c5de5a008b3ea3b0d2bc-6_mobile_659x494.jpg",
//   },
// ]}
