import axios from "axios";
import "./feed.css";
import { useState, useEffect } from "react";
import Share from "../share/Share";
import Post from "../posts/Post";
const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/6138904b3ffcf35b30aacc6b");
      // console.log(res);
      setPosts(res.data);
    };
    fetchPost();
  }, [username]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
