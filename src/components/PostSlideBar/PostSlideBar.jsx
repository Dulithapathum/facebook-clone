import React from "react";
import PostAddSection from "./PostAddSection/PostAddSection";
import Post from "./BasicPost/Post";
import "./PostSlideBar.css";
export default function PostSlideBar() {
  return (
    <>
      <center>
        <PostAddSection></PostAddSection>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </center>
    </>
  );
}
