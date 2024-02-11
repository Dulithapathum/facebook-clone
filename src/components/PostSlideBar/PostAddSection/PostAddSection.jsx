import React from "react";
import "./PostAddSection.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import CollectionsIcon from "@mui/icons-material/Collections";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
export default function PostAddSection() {
  return (
    <>
      <div className="postaddsection">
        <div className="section1">
          <div className="profileimg">
            <img src="\images\mark-zuckerberg.jpg" alt="" />
          </div>
          <div className="posttitle">
            <input placeholder="What's on your mind, Dulitha?" />
          </div>
        </div>
        <div className="section2">
          <div className="item">
            <VideocamIcon
              className="VideocamIcon"
              fontSize="large"
            ></VideocamIcon>
            <h5>Live Video</h5>
          </div>
          <div className="item">
            <CollectionsIcon
              className="CollectionsIcon"
              fontSize="large"
            ></CollectionsIcon>
            <h5>Photo/Video</h5>
          </div>
          <div className="item">
            <InsertEmoticonIcon
              className="InsertEmoticonIcon"
              fontSize="large"
            ></InsertEmoticonIcon>
            <h5>Feeling/Activity</h5>
          </div>
        </div>
      </div>
    </>
  );
}
