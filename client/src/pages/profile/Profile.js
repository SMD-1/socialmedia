import Topbar from "../../Components/topbar/Topbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Rightbar from "../../Components/rightbar/Rightbar";
import Feed from "../../Components/feed/Feed";
import "./profile.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=test1`);
      setUser(res.data);
      // console.log("user in profile: ", res.data);
    };
    fetchUser();
  }, []);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF}posts/post5.jpg`}
                alt="banner"
              />
              <img
                className="profileUserImg"
                src={`${PF}Images/user3.jpg`}
                alt="profileImage"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.description}</span>
            </div>
          </div>
          <div className="porfileRightBottom">
            <Feed username="test1" />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
