import * as MaterialIcon from "react-icons/md";
import "./share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/images/user3.jpg" alt="user-profile" />
          <input
            type="text"
            className="shareInput"
            placeholder="What's on your mind?"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <MaterialIcon.MdPermMedia
                color="tomato"
                size="1.3rem"
                className="shareOptionIcon"
              />
              <span className="shareOptionText">Photo/Video</span>
            </div>
            <div className="shareOption">
              <MaterialIcon.MdVideoCall
                color="#4f46e5"
                size="1.5rem"
                className="shareOptionIcon"
              />
              <span className="shareOptionText">Room</span>
            </div>
            <div className="shareOption">
              <MaterialIcon.MdInsertEmoticon
                color="#ff7505"
                size="1.3rem"
                className="shareOptionIcon"
              />
              <span className="shareOptionText">Emotions</span>
            </div>
            <button className="shareButton">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
