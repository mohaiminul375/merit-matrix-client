import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import TopScholarship from "./TopScholarship";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>merit-matrix | Home</title>
      </Helmet>
      <Banner></Banner>
      <TopScholarship></TopScholarship>
    </div>
  );
};

export default Home;
