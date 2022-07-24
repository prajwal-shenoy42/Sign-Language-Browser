import ImageSlider from "./ImageSlider/ImageSlider"


const Demo = () => {
  const slides = [
    { url: "http://localhost:3000/hello.jpeg", title: "Hello" },
    { url: "http://localhost:3000/yes.jpg", title: "Yes" },
    { url: "http://localhost:3000/no.jpeg", title: "No" },
    { url: "http://localhost:3000/thankyou.jpg", title: "Thank You" },
    { url: "http://localhost:3000/iloveyou.jpeg", title: "I Love You" },
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