import { height } from "@mui/system";
import ImageSlider from "./ImageSlider";
import Typography from '@mui/material/Typography';

const Demo = () => {
  const slides = [
    { url: "http://localhost:3000/hello.jpeg", title: "beach" },
    { url: "http://localhost:3000/yes.jpg", title: "boat" },
    { url: "http://localhost:3000/no.jpeg", title: "forest" },
    { url: "http://localhost:3000/thankyou.jpg", title: "city" },
    { url: "http://localhost:3000/iloveyou.jpeg", title: "italy" },
  ];
  const containerStyles = {
    width: "400px",
    height: "400px",
    margin: "0 auto",
    marginTop: "0 auto"
  };
  return (
    <div>
      <div style={containerStyles}>
      <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Demo;