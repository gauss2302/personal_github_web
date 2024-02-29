import Search from "../components/Search.jsx";
import SortRepos from "../components/SortRepos.jsx";
import ProfileInfo from "../components/ProfileInfo.jsx";
import Repos from "../components/Repos.jsx";
import React, { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner.jsx";

const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [sortType, setSortType] = useState("recent");
  const user = true;

  const getUserProfileAndRepos = useCallback(async () => {
    setLoading(true);
    try {
      const userRes = await fetch("https://api.github.com/users/gauss2302");
      const userProfile = await userRes.json();
      setUserProfile(userProfile);

      const repoRes = await fetch(userProfile.repos_url);
      const repos = await repoRes.json();
      setRepos(repos);
      console.log("userProfile:", userProfile);
      console.log("repos:", repos);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUserProfileAndRepos().then((r) => getUserProfileAndRepos());
  }, [getUserProfileAndRepos]);

  return (
    <div className={"m-4"}>
      <Search />
      <SortRepos />
      <div
        className={"flex gap-4 flex-col lg:flex-row justify-center items-start"}
      >
        {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
        {repos.length > 0 && !loading && <Repos repos={repos} />}
        {loading && <Spinner />}
      </div>
    </div>
  );
};
export default HomePage;
