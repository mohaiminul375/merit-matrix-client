import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import TopScholarship from "./TopScholarship";
import AllReview from "./AllReview";
import Statics from "./Statics";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>merit-matrix | Home</title>
      </Helmet>
      <Banner></Banner>
      <About />
      <Statics></Statics>
      <TopScholarship></TopScholarship>
      <AllReview></AllReview>
    </div>
  );
};

export default Home;
