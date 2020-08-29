import React from "react";
import profilePic from "../Images/profie pic.png";
function TeacherInfo() {
  return (
    <div className={"teacherInfo"}>
      <hr className={"sideNavBarHR"} />

      <img src={profilePic} alt="" />

      <h3>Walter White</h3>
      <br />
      <p>Teacher</p>
    </div>
  );
}
function NoteProfilePic() {
  return <img src={profilePic} alt="profile-pic" className={"profilePic"} />;
}
export default TeacherInfo;
export { NoteProfilePic };
