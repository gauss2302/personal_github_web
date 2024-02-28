import Search from "../components/Search.jsx";
import SortRepos from "../components/SortRepos.jsx";
import ProfileInfo from "../components/ProfileInfo.jsx";
import Repos from "../components/Repos.jsx";

const HomePage = () => {
  return (
    <div className={"m-4"}>
      <Search />
      <SortRepos />
      <div
        className={"flex gap-4 flex-col lg:flex-row justify-center items-start"}
      >
        <ProfileInfo />
        <Repos />
      </div>
    </div>
  );
};
export default HomePage;
