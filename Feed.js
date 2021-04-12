import React from "react";
import TweetBox from "./TweetBox";
import "./Feed.css";
import Post from "./Post";
import Posts from "./Posts";
import Postss from "./Postss";
import Postsss from "./Postsss";
import Postssss from "./Postssss";
function Feed() {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>HOME</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <Post />
      <Posts />
      <Postss />
      <Postsss />
      <Postssss />
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </div>
  );
}

export default Feed;
