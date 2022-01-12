import { useState, useEffect } from "react";
import "./conversation.css";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const friendId = conversation.member.find((m) => m !== currentUser._id);
  }, []);
  return (
    <div className="conversation">
      <img
        src="./assets/person/user.png"
        className="conversationImg"
        alt="userImage"
      />
      <span>John Doe</span>
    </div>
  );
};

export default Conversation;
