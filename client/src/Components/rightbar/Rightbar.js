import { MdCake } from "react-icons/md";
import { User } from "../../data";
import Online from "../online/Online";
import "./rightbar.css";

const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  // console.log(profile);
  const HomeRightBar = () => {
    return (
      <>
        <div className="bithdayContainer">
          <MdCake className="rightbarIcon" size="2.5rem" />
          <span className="birthdayText">
            <b>Karan </b>and <b>1 other friends </b> have a birthday today
          </span>
        </div>
        <div className="sponsors">
          <img src="assets/images/sponsor.jpg" alt="sponsor" />
        </div>
        <h3 className="rightbarTitle">Online Friends</h3>
        <ul className="rightbarFriendList">
          {User.map((u) => {
            return <Online key={u.id} user={u} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From: </span>
            <span className="rightBarInfoValue">{user.from}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Department: </span>
            <span className="rightBarInfoValue">{user.department}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Semester: </span>
            <span className="rightBarInfoValue">{user.semester}</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img
              src={PF + "person/user1.jpg"}
              alt="friend"
              className="rightBarFollowingImg"
            />
            <span className="rigthBarFollowingName">John Doe1</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src={PF + "person/user2.jpg"}
              alt="friend"
              className="rightBarFollowingImg"
            />
            <span className="rigthBarFollowingName">John Doe</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src={PF + "person/user3.jpg"}
              alt="friend"
              className="rightBarFollowingImg"
            />
            <span className="rigthBarFollowingName">John Doe</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src={PF + "person/user4.jpg"}
              alt="friend"
              className="rightBarFollowingImg"
            />
            <span className="rigthBarFollowingName">John Doe</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src={PF + "person/user5.jpg"}
              alt="friend"
              className="rightBarFollowingImg"
            />
            <span className="rigthBarFollowingName">John Doe</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src={PF + "person/user6.jpg"}
              alt="friend"
              className="rightBarFollowingImg"
            />
            <span className="rigthBarFollowingName">John Doe</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default Rightbar;
