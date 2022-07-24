import ImageSlider from "./ImageSlider/ImageSlider"


const Demo = () => {
  const slides = [
    { url: "/hello.jpeg", title: "Hello" },
    { url: "/yes.jpg", title: "Yes" },
    { url: "/no.jpeg", title: "No" },
    { url: "/thankyou.jpg", title: "Thank You" },
    { url: "/iloveyou.jpeg", title: "I Love You" },
  ];
  const containerStyles = {
    width: "400px",
    height: "400px",
    margin: "0 auto"
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