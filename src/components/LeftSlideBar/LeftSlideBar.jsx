import React from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RestoreIcon from "@mui/icons-material/Restore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GroupsIcon from "@mui/icons-material/Groups";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import "./LeftSlideBar.css";

export default function LeftSlideBar() {
  return (
    <>
      {/* LeftSliderBar Section */}
      <div className="LeftConteiner">
        <ul>
          <li className="ListItem">
            <div className="icon">
              <img src="\images\mark-zuckerberg.jpg" alt="" />
            </div>
            <h6>Dulitha Pathum</h6>
          </li>
          <li className="ListItem">
            <div className="icon">
              <PeopleAltIcon fontSize="large"></PeopleAltIcon>
            </div>
            <h6>Friends</h6>
          </li>
          <li className="ListItem">
            <div className="icon">
              <RestoreIcon fontSize="large"></RestoreIcon>
            </div>
            <h6>Memories</h6>
          </li>
          <li className="ListItem">
            <div className="icon">
              <BookmarkIcon fontSize="large"></BookmarkIcon>
            </div>
            <h6>Saved</h6>
          </li>
          <li className="ListItem">
            <div className="icon">
              <GroupsIcon fontSize="large"></GroupsIcon>
            </div>
            <h6>Groups</h6>
          </li>
          <li className="ListItem">
            <div className="icon">
              <OndemandVideoIcon fontSize="large"></OndemandVideoIcon>
            </div>
            <h6>Videos</h6>
          </li>
          <li className="ListItem">
            <div className="icon">
              <StorefrontIcon fontSize="large"></StorefrontIcon>
            </div>
            <h6>marketplace</h6>
          </li>
          <li className="ListItem">
            <div className="icon">
              <ExpandCircleDownIcon fontSize="large"></ExpandCircleDownIcon>
            </div>
            <h6>See More</h6>
          </li>
          <hr />
          <li className="ListItem  ">
            <h4>Your Shortcuts</h4>
          </li>
          <li className="ListItem">
            <div className="icon">
              <img src="\images\bike.jpg" alt="" />
            </div>
            <h6>Buke Hub</h6>
          </li>
          <li className="ListItem">
            <div className="icon">
              <img
                src="\images\Futuristic Modern Black and White Logo.png"
                alt=""
              />
            </div>
            <h6>TechGeekHub</h6>
          </li>
          <li className="ListItem">
            <div className="icon">
              <img src="\images\car.jpg" alt="" />
            </div>
            <h6>Car-Hub</h6>
          </li>
          <li className="ListItem">
            <div className="icon">
              <img src="\images\programming.jpg" alt="" />
            </div>
            <h6>My-Programming</h6>
          </li>

          <li className="ListItem-end ">
            <p>
              Privacy · Terms · Advertising · Ad Choices <br /> Cookies · Meta ©
              2024
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
