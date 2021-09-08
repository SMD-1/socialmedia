import Topbar from "../../Components/topbar/Topbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Rightbar from "../../Components/rightbar/Rightbar";
import Feed from "../../Components/feed/Feed";
import "./profile.css";
const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

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
              <h4 className="profileInfoName">Danny</h4>
              <span className="profileInfoDesc">Hello world! 👋</span>
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
