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
        <Avatar src="https://economictimes.indiatimes.com/thumb/msid-71917504,width-1200,height-900,resizemode-4,imgsize-623426/untitled-3.jpg?from=mdr" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Virat Kohli{""}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" />
                @imViratkohli
              </span>
            </h3>
          </div>
          <div ClassName="post__headerDescription">
            <p>Great start of the tournament RCB RCB</p>
          </div>
        </div>
        <img src="https://c.ndtvimg.com/2020-02/1r5vdst_rcb_625x300_14_February_20.jpg?q=60" />
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
