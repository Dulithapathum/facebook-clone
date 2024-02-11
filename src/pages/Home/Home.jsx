import React from "react";
import NavBar from "../../components/Navigation/NavBar";
import LeftSlideBar from "../../components/LeftSlideBar/LeftSlideBar";
import RightSlideBar from "../../components/RightSlideBar/RightSlideBar";
import PostSlideBar from "../../components/PostSlideBar/PostSlideBar";
import "./Home.css";
export default function Home() {
  return (
    <>
      <div className="NavigationBar">
        <NavBar></NavBar>
      </div>
      <div className="MainConteiner">
        <div className="LeftSlider">
          <LeftSlideBar></LeftSlideBar>
        </div>
        <div className="PostSlider">
          <PostSlideBar></PostSlideBar>
        </div>
        <div className="RightSlider">
          <RightSlideBar></RightSlideBar>
        </div>
      </div>
    </>
  );
}
