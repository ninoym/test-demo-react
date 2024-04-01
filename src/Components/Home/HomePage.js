import solar from "../../assets/solar.mp4";

const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop width="360px" height="480px">
        <source src={solar} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="Title-1">Make forms worth filling out</div>
        <div className="Title-2">
          Get more data—like signups, feedback, and anything else—with forms
          designed to be refreshingly different.
        </div>
        <div className="Title-3">
          <button>Get Started, It's free bro</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
