import { useState, useEffect } from "react";
import axios from "axios";
import * as MaterialIcon from "react-icons/md";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ post }) => {
  // console.log(post);
  const { img, description, createdAt, likes, comment, userId } = post;
  const [like, setLike] = useState(likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/${userId}`);
      // console.log(res);
      setUser(res.data);
    };
    fetchUser();
    // eslint-disable-next-line
  }, [userId]);
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
    // document.getElementById("likeButton").style.color = "#1D4ED8";
    // document.getElementById("loveButton").style.color = "#E11D48";
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                src={user.profilePicture || `${PF}images/user.png`}
                alt="user-profile"
              />
            </Link>
            <div className="postDetails">
              <span className="postUserName">{user.username}</span>
              <small>
                <span className="postDate">{format(createdAt)}</span>
              </small>
            </div>
          </div>
          <div className="postTopRight">
            <MaterialIcon.MdMoreVert className="postTopIcon" size="1.5rem" />
          </div>
        </div>
        <hr className="postHr" />
        <div className="postCenter">
          <span className="caption">
            <p> {description} </p>
          </span>
          <img src={PF + img} alt="post1" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <MaterialIcon.MdThumbUp
              // id="likeButton"
              className="postBottomIcon"
              color="#1D4ED8"
              onClick={likeHandler}
            />
            <MaterialIcon.MdFavorite
              // id="loveButton"
              className="postBottomIcon"
              color="#E11D48"
              onClick={likeHandler}
            />
            <span className="likeCount">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postComment">{comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
