import axios from "axios";
import { useContext, useRef, useState } from "react";
import * as MaterialIcon from "react-icons/md";
import { AuthContext } from "../../context/AuthContext";
import "./share.css";

const Share = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const description = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      description: description.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file);
      data.append("name", fileName);
      newPost.img = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err.message);
      }
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/user.png"
            }
            alt="user-profile"
          />
          <input
            type="text"
            className="shareInput"
            placeholder={"What's on your mind " + user.username + "?"}
            ref={description}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <MaterialIcon.MdPermMedia
                color="tomato"
                size="1.3rem"
                className="shareOptionIcon"
              />
              <span className="shareOptionText">Photo/Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
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
            <button className="shareButton" type="submit">
              Share
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Share;
