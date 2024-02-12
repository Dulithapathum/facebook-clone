import React from "react";
import "./Post.css";
import PublicIcon from "@mui/icons-material/Public";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";
import MoodIcon from "@mui/icons-material/Mood";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import FilePresentOutlinedIcon from "@mui/icons-material/FilePresentOutlined";
export default function Post() {
  return (
    <>
      <div className="postsection  ">
        <div className="section-1">
          <div className="title-1">
            <img src="\images\mark-zuckerberg.jpg" alt="" />
          </div>
          <div className="title-2">
            <h5>Dulitha Pathum</h5>
            <span>30 minutes ago .</span>
            <PublicIcon className="PublicIcon" fontSize="13px"></PublicIcon>
          </div>
          <div className="title-3">
            <MoreHorizIcon className="MoreHorizIcon"></MoreHorizIcon>
            <CloseIcon className="CloseIcon"></CloseIcon>
          </div>
        </div>
        <div className="section-2">
          <p>
            This Is My First Profile picture{" "}
            <MoodIcon className="MoodIcon"></MoodIcon>
          </p>
        </div>
        <div className="section-3">
          <img src="\images\mark-zuckerberg.jpg" alt="" />
        </div>
        <div className="section-4">
          <div className="react">
            <img src="\images\facebook-love.svg" alt="" className="img1" />
            <img src="\images\facebook-wow.svg" alt="" className="img2" />
            <img src="\images\facebook-like.svg" alt="" className="img3" />
          </div>
          <div className="react-names">
            <span>Sadeepa Nuwan,Kalana Supun and 264 others </span>
          </div>
          <div className="comment-count">
            <span>234 comments</span>
          </div>
        </div>
        <div className="section-5">
          <div className="section-5-sub-item">
            <ThumbUpOffAltIcon className="ThumbUpOffAltIcon"></ThumbUpOffAltIcon>
            <h5>Like</h5>
          </div>
          <div className="section-5-sub-item">
            <CommentIcon className="CommentIcon"></CommentIcon>
            <h5>Comment</h5>
          </div>
          <div className="section-5-sub-item">
            <SendIcon className="SendIcon"></SendIcon>
            <h5>Share</h5>
          </div>
        </div>
        <div className="section-6">
          <div className="section-6-img">
            <img src="\images\mark-zuckerberg.jpg" alt="" />
          </div>
          <div className="posttitle">
            <input placeholder="Write a comment..." />
            <div className="comment-icon">
              <SwitchAccountOutlinedIcon></SwitchAccountOutlinedIcon>
              <SentimentSatisfiedIcon></SentimentSatisfiedIcon>
              <PhotoCameraOutlinedIcon></PhotoCameraOutlinedIcon>
              <GifBoxOutlinedIcon></GifBoxOutlinedIcon>
              <FilePresentOutlinedIcon></FilePresentOutlinedIcon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
