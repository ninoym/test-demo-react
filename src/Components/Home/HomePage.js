import solar from "../../assets/solar.mp4";

const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop width="360px" height="480px">
        <source src={solar} type="video/mp4" />
      </video>
    </div>
  );
};

export default HomePage;
