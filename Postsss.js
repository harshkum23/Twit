import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
function Post({
  displayName,
  username,
  verified,
  text,
  images,

  avatar,
}) {
  return (
    <div className="post">
      <div Classname="post__avatar">
        <Avatar src="https://pbs.twimg.com/profile_images/975645345987399680/mup42b7z_400x400.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Eoin Morgan{""}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" />
                @Eoin16
              </span>
            </h3>
          </div>
          <div ClassName="post__headerDescription">
            <p>Great win last night against Sunrisers Hyderabad</p>
          </div>
        </div>
        <img src="https://static.toiimg.com/photo/82025229.cms" />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />

          <FavoriteBorderIcon fontSize="small" />

          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
