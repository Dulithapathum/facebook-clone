import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      {/* navbar section */}
      <div className="navbar-box">
        {/* navbar left section */}
        <div className="navbar-left">
          {/* navbar title */}
          <h3 className="navbar-title">Facebook</h3>
          {/* navbar searchbox */}
          <div className="navbar-searchbox">
            <SearchIcon className="search-icon"></SearchIcon>
            <input placeholder="Search FaceBook" />
          </div>
        </div>

        {/* navbar center section */}
        <div className="navbar-center">
          <div className="navbar-links">
            {/* navbar icons */}
            <div className="link-icon ">
              <HomeIcon fontSize="large"></HomeIcon>
            </div>
            <div className="link-icon">
              <FlagIcon fontSize="large"></FlagIcon>
            </div>
            <div className="link-icon">
              <OndemandVideoIcon fontSize="large"></OndemandVideoIcon>
            </div>
            <div className="link-icon">
              <StorefrontIcon fontSize="large"></StorefrontIcon>
            </div>
            <div className="link-icon">
              <GroupsIcon fontSize="large"></GroupsIcon>
            </div>
          </div>
        </div>

        {/* navbar right section */}
        <div className="navbar-right">
          {/* navbar profile picture */}
          <div className="navbar-right-profile">
            <img src="\images\mark-zuckerberg.jpg" alt="Profile Picture" />
          </div>

          <div className="navbar-right-icons">
            <NotificationsIcon
              className="navbar-right-icon"
              fontSize="large"
            ></NotificationsIcon>

            <EmailIcon
              className="navbar-right-icon"
              fontSize="large"
            ></EmailIcon>
          </div>
          <div className="navbar-right-icons">
            <SettingsIcon
              className="navbar-right-icon"
              fontSize="large"
            ></SettingsIcon>
          </div>
        </div>
      </div>
    </>
  );
}
