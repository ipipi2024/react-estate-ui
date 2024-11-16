import SearchBar from "../../components/searchBar/SearchBar";
import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Find Real Estate & Get Your Dream Place Estate
          </h1>
          <p>
            A cutting-edge real estate app connecting buyers, sellers, and
            renters with detailed listings, virtual tours, and seamless search
            features for a hassle-free property experience.
          </p>
          <SearchBar/>
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" />
      </div>
    </div>
  );
};

export default HomePage;
