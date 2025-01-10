import React from "react";
import { FcCalendar, FcVoicemail } from "react-icons/fc";
import "./ProfileDesign.css";
import useDateFormatter from "../../../hooks/useDateFormatter";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import navigate from "../../../utils/navigate";

const ProfileDesign = ({ profileData }) => {
    const history = useNavigate();
  return (
    <>
      <div className="profile">
        <div className="">
          <div className="">
            <div className="container">
              <div className="profile-content">
                <div className="profile-card">
                  <div className="profile-card-wrapper">
                    <div
                      className="card-header bg_cover"
                      style={{
                        backgroundImage: `url('https://cdn.ayroui.com/1.0/images/profile/card-bg.jpg')`,
                      }}
                    ></div>

                    <div className="card-profile">
                      <img
                        src="https://cdn.ayroui.com/1.0/images/profile/profile.jpg"
                        alt="Profile"
                      />
                    </div>
                    <button
                    onClick={() => navigate(history, "update-profile", profileData)}
                    className="btn"
                  >
                    <CiEdit size="2rem" color="red"/>
                  </button>

                    <div className="text-center card-content rounded-buttons">
                      <h3 className="card-title">
                        {profileData?.firstname} {profileData?.lastname}
                      </h3>
                      <hr />

                      <div className="d-flex justify-content-center flex-wrap ">
                        <div
                          className="d-flex justify-content-start gap-3"
                          style={{ flex: "1 1 45%" }}
                        >
                          <div>
                            <FcCalendar size="2rem"/>
                          </div>
                          <div>{useDateFormatter(profileData?.createdAt)}</div>
                        </div>
                        <div
                          className="d-flex justify-content-start gap-3"
                          style={{ flex: "1 1 45%" }}
                        >
                          <div>
                            <FcVoicemail size="2rem"/>
                          </div>
                          <div>{profileData?.email}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDesign;
