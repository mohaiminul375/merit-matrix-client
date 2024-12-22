import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import TopScholarship from "./TopScholarship";
import AllReview from "./AllReview";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>merit-matrix | Home</title>
      </Helmet>
      {/* <Banner></Banner> */}
      <TopScholarship></TopScholarship>
      <AllReview></AllReview>
    </div>
  );
};

export default Home;
