import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
function TweetBox() {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://static.remove.bg/remove-bg-web/a6c5f1017e9c0bdc648aad9debd2f40a17d45814/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg" />

          <input placeholder="What's happeing?" type="text" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
          type="text"
        />

        <Button className="tweetBox__tweetButton"> Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
