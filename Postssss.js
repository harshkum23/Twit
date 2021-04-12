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
        <Avatar src="https://pbs.twimg.com/profile_images/1145739496744542214/bxqrk2ls_400x400.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              David Warner{""}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" />
                @davidwarner31
              </span>
            </h3>
          </div>
          <div ClassName="post__headerDescription">
            <p>Not a good game for us but we will bounce back #srh</p>
          </div>
        </div>
        <img src="https://s.yimg.com/ny/api/res/1.2/F93cmcEpFcMwfq3uPGeXCw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MA--/https://s.yimg.com/uu/api/res/1.2/0xu_PW_JhlO7Z0w6.4dzQw--~B/aD04MTA7dz0xNDQwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/newsbytes_319/179e603770c7ecb464ec397e9e2bc99b" />
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
