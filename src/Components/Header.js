import React, { useState } from "react";
import Logo from "../Images/illustration.png";
import ClassStream from "../Images/class stream_icon black.png";
import Activity from "../Images/activity_text black color.png";
import Notes from "../Images/notes_text black color.png";
import Members from "../Images/members text black.png";
import ClassStreamWhite from "../Images/class stream text.png";
import ActivityWhite from "../Images/activity_text white color.png";
import NoteWhite from "../Images/notes_text white color.png";
import MembersWhite from "../Images/members text white.png";
import NotificationTextBlack from "../Images/notification_text black colr.png";
import NotificationTextWhite from "../Images/notification_text white colr.png";
function Heading() {
  const [classImg, setClassImg] = useState(true);
  const [activityImg, setActivityImg] = useState(false);
  const [noteImg, setNoteImg] = useState(false);
  const [notificationImg, setNotificationImg] = useState(false);
  const [memberImg, setMemberImg] = useState(false);
  const [classStream, setClassStream] = useState(true);
  const [activity, setActivity] = useState(false);
  const [notes, setNotes] = useState(false);
  const [notification, setNotification] = useState(false);
  const [members, setMembers] = useState(false);
  const customStyle = {
    backgroundColor: "#5383ff",
    borderRadius: "0px 10px 0px 10px",
    height:"75px",
  };

  return (
    <header>
      <img className={"headerImg"} src={Logo} alt="logo" />
      <div className="topNavBar">
        <button
          onClick={() => {
            setClassStream(true);
            setActivity(false);
            setNotes(false);
            setNotification(false);
            setMembers(false);
            setClassImg(true);
            setActivityImg(false);
            setNoteImg(false);
            setNotificationImg(false);
            setMemberImg(false);
          }}
          style={classStream ? customStyle : null}
        >
          <img
            src={classImg ? ClassStreamWhite : ClassStream}
            alt="ClassStreamImg"
          />
        </button>
        <button
          onClick={() => {
            setActivity(true);
            setClassStream(false);
            setNotes(false);
            setNotification(false);
            setMembers(false);
            setClassImg(false);
            setActivityImg(true);
            setNoteImg(false);
            setNotificationImg(false);
            setMemberImg(false);
          }}
          style={activity ? customStyle : null}
        >
          <img src={activityImg ? ActivityWhite : Activity} alt="Activity" />
        </button>
        <button
          onClick={() => {
            setNotes(true);
            setClassStream(false);
            setActivity(false);
            setNotification(false);
            setMembers(false);
            setClassImg(false);
            setActivityImg(false);
            setNoteImg(true);
            setNotificationImg(false);
            setMemberImg(false);
          }}
          style={notes ? customStyle : null}
        >
          <img src={noteImg ? NoteWhite : Notes} alt="Notes" />
        </button>
        <button
          onClick={() => {
            setNotification(true);
            setClassStream(false);
            setNotes(false);
            setActivity(false);
            setMembers(false);
            setClassImg(false);
            setActivityImg(false);
            setNoteImg(false);
            setNotificationImg(true);
            setMemberImg(false);
          }}
          style={notification ? customStyle : null}
        >
          <img
            src={
              notificationImg ? NotificationTextWhite : NotificationTextBlack
            }
            alt="Notification"
          />
        </button>
        <button
          onClick={() => {
            setMembers(true);
            setMemberImg(true);
            setClassStream(false);
            setNotes(false);
            setActivity(false);
            setNotification(false);
            setClassImg(false);
            setActivityImg(false);
            setNoteImg(false);
            setNotificationImg(false);
          }}
          style={members ? customStyle : null}
        >
          <img src={memberImg ? MembersWhite : Members} alt="Notification" />
        </button>
      </div>
      <div></div>
    </header>
  );
}

export default Heading;
